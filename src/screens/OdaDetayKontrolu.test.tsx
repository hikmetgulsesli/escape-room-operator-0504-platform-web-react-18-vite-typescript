import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { OdaDetayKontrolu } from "../screens/OdaDetayKontrolu";
import type { Room, LogEntry } from "../types/domain";

const mockRoom: Room = {
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
  puzzles: [
    { id: "pz1", name: "Giriş Kapısı", status: "solved" },
    { id: "pz2", name: "Lazer Ağı", status: "locked" },
  ],
  inventory: [{ id: "i1", name: "MAVİ ANAHTAR", icon: "key", active: false }],
  timeRemaining: 520,
  totalTime: 3600,
  elapsedTime: 120,
  startTime: new Date().toISOString(),
  image: "",
};

const mockLogs: LogEntry[] = [
  {
    id: "l1",
    timestamp: new Date().toISOString(),
    roomId: "room-1",
    roomName: "Sektör A-1",
    type: "puzzle",
    title: "BULMACA ÇÖZÜLDÜ",
    details: "Test log",
  },
];

const defaultProps = {
  room: mockRoom,
  logs: mockLogs,
  onNavigate: vi.fn(),
  onBack: vi.fn(),
  onAddPlayer: vi.fn(),
  onRemovePlayer: vi.fn(),
  onTogglePuzzle: vi.fn(),
  onSendHint: vi.fn(),
  onPause: vi.fn(),
  onResume: vi.fn(),
  onReset: vi.fn(),
  onStop: vi.fn(),
  onToggleEmergency: vi.fn(),
  formatTime: (s: number) => `00:${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`,
};

describe("OdaDetayKontrolu", () => {
  it("renders room name and timer", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    expect(screen.getByText("Karanlık Mahzen")).toBeInTheDocument();
    expect(screen.getByText(/00:08:40/)).toBeInTheDocument();
  });

  it("shows live status badge", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    expect(screen.getByText("CANLI")).toBeInTheDocument();
  });

  it("pauses session", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Duraklat"));
    expect(defaultProps.onPause).toHaveBeenCalled();
  });

  it("stops session", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Durdur"));
    expect(defaultProps.onStop).toHaveBeenCalled();
  });

  it("resets room", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Sıfırla"));
    expect(defaultProps.onReset).toHaveBeenCalled();
  });

  it("adds a player", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    const input = screen.getByPlaceholderText("Yeni oyuncu...");
    fireEvent.change(input, { target: { value: "Mehmet K." } });
    fireEvent.click(screen.getByLabelText("Ekle"));
    expect(defaultProps.onAddPlayer).toHaveBeenCalledWith("Mehmet K.");
  });

  it("removes a player", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getAllByLabelText("Kaldır")[0]);
    expect(defaultProps.onRemovePlayer).toHaveBeenCalledWith("p1");
  });

  it("sends a quick hint", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getByText("Kasadaki sembollere dikkat edin."));
    expect(defaultProps.onSendHint).toHaveBeenCalledWith("Kasadaki sembollere dikkat edin.");
  });

  it("sends custom hint", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    const textarea = screen.getByPlaceholderText("Özel mesaj yazın...");
    fireEvent.change(textarea, { target: { value: "Test ipucu" } });
    fireEvent.click(screen.getByLabelText("Gönder"));
    expect(defaultProps.onSendHint).toHaveBeenCalledWith("Test ipucu");
  });

  it("toggles puzzle status", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[1]);
    expect(defaultProps.onTogglePuzzle).toHaveBeenCalledWith("pz2");
  });

  it("displays room logs", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    expect(screen.getByText("Test log")).toBeInTheDocument();
  });

  it("displays inventory items", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    expect(screen.getByText("MAVİ ANAHTAR")).toBeInTheDocument();
  });

  it("toggles fullscreen on camera", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Tam Ekran"));
    expect(screen.getByLabelText("Tam Ekran")).toBeInTheDocument();
  });

  it("toggles mic state", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Mikrofon"));
    expect(screen.getByLabelText("Mikrofon")).toBeInTheDocument();
  });

  it("opens logout confirmation", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getAllByText("Çıkış")[0]);
    expect(screen.getByText(/Çıkış yapmak istediğinize emin misiniz/)).toBeInTheDocument();
  });

  it("navigates back to dashboard", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getByText("Panorama"));
    expect(defaultProps.onNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("toggles emergency stop", () => {
    render(<OdaDetayKontrolu {...defaultProps} />);
    fireEvent.click(screen.getByText(/ACİL DURDUR/));
    expect(defaultProps.onToggleEmergency).toHaveBeenCalled();
  });
});
