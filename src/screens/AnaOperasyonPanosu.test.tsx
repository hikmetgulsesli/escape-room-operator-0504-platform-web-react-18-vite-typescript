import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AnaOperasyonPanosu } from "../screens/AnaOperasyonPanosu";
import type { Room } from "../types/domain";

const mockRooms: Room[] = [
  {
    id: "room-1",
    name: "Karanlık Mahzen",
    sector: "A-1",
    status: "in-game",
    difficulty: "YÜKSEK",
    maxPlayers: 6,
    players: [
      { id: "p1", name: "Ahmet Y." },
      { id: "p2", name: "Selin K." },
    ],
    puzzles: [{ id: "pz1", name: "Giriş Kapısı", status: "solved" }],
    inventory: [{ id: "i1", name: "MAVİ ANAHTAR", icon: "key", active: false }],
    timeRemaining: 520,
    totalTime: 3600,
    elapsedTime: 120,
    startTime: new Date().toISOString(),
    image: "",
  },
  {
    id: "room-2",
    name: "Antik Mezar",
    sector: "C-3",
    status: "available",
    difficulty: "ORTA",
    maxPlayers: 4,
    players: [],
    puzzles: [{ id: "pz2", name: "Hiyeroglif", status: "locked" }],
    inventory: [{ id: "i2", name: "FENER", icon: "flashlight_on", active: false }],
    timeRemaining: 3600,
    totalTime: 3600,
    elapsedTime: 0,
    startTime: null,
    image: "",
  },
];

const defaultProps = {
  rooms: mockRooms,
  filterStatus: "all" as const,
  searchQuery: "",
  operatorName: "Test Operatör",
  accessLevel: "Seviye 1",
  onFilterChange: vi.fn(),
  onSearchChange: vi.fn(),
  onNavigate: vi.fn(),
  onSelectRoom: vi.fn(),
  onToggleEmergency: vi.fn(),
  onStartSession: vi.fn(),
  formatTime: (s: number) => `00:${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`,
};

describe("AnaOperasyonPanosu", () => {
  it("renders room cards", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    expect(screen.getByText("Karanlık Mahzen")).toBeInTheDocument();
    expect(screen.getByText("Antik Mezar")).toBeInTheDocument();
  });

  it("displays player count", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    expect(screen.getByText(/2 \/ 6 Oyuncu/)).toBeInTheDocument();
  });

  it("filters rooms by status", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    fireEvent.click(screen.getByText(/AKTİF \(1\)/));
    expect(defaultProps.onFilterChange).toHaveBeenCalledWith("in-game");
  });

  it("searches rooms", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    const input = screen.getByPlaceholderText("Oda Ara...");
    fireEvent.change(input, { target: { value: "Karanlık" } });
    expect(defaultProps.onSearchChange).toHaveBeenCalledWith("Karanlık");
  });

  it("selects a room on click", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    fireEvent.click(screen.getByText("Karanlık Mahzen"));
    expect(defaultProps.onSelectRoom).toHaveBeenCalledWith("room-1");
  });

  it("starts a session for available room", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    fireEvent.click(screen.getByText(/OTURUM BAŞLAT/));
    expect(defaultProps.onStartSession).toHaveBeenCalledWith("room-2");
  });

  it("toggles emergency stop", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    fireEvent.click(screen.getByText(/ACİL DURDUR/));
    expect(defaultProps.onToggleEmergency).toHaveBeenCalled();
  });

  it("navigates via sidebar", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    fireEvent.click(screen.getByText("Olay Günlüğü"));
    expect(defaultProps.onNavigate).toHaveBeenCalledWith("logs");
  });

  it("shows empty state when no rooms match", () => {
    render(<AnaOperasyonPanosu {...defaultProps} rooms={[]} />);
    expect(screen.getByText(/Arama kriterlerine uygun oda bulunamadı/)).toBeInTheDocument();
  });

  it("displays status badges correctly", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    expect(screen.getByText("AKTİF")).toBeInTheDocument();
    expect(screen.getByText("BOŞ")).toBeInTheDocument();
  });

  it("navigates to dashboard on YENİ OTURUM click", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    fireEvent.click(screen.getByText("YENİ OTURUM"));
    expect(defaultProps.onNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("opens logout confirmation on Çıkış click", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    fireEvent.click(screen.getAllByText("Çıkış")[0]);
    expect(screen.getByText(/Çıkış yapmak istediğinize emin misiniz/)).toBeInTheDocument();
  });

  it("opens notifications panel on bell click", () => {
    render(<AnaOperasyonPanosu {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Bildirimler"));
    expect(screen.getByText(/Bildirimler/)).toBeInTheDocument();
  });
});
