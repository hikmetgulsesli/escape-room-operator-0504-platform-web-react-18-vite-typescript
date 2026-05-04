import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { OlayGunlugu } from "../screens/OlayGunlugu";
import type { LogEntry } from "../types/domain";

const mockLogs: LogEntry[] = [
  {
    id: "l1",
    timestamp: "2023-10-27T14:45:12",
    roomId: "room-1",
    roomName: "Sektör A - Laboratuvar",
    type: "puzzle",
    title: "BULMACA ÇÖZÜLDÜ",
    details: "DNA Dizilimi tamamlandı.",
  },
  {
    id: "l2",
    timestamp: "2023-10-27T14:42:05",
    roomId: "room-2",
    roomName: "Sektör B - Reaktör",
    type: "hint",
    title: "İPUCU TALEBİ",
    details: "Otomatik ipucu gönderildi.",
  },
  {
    id: "l3",
    timestamp: "2023-10-27T14:38:55",
    roomId: "room-4",
    roomName: "Sistem Geneli",
    type: "emergency",
    title: "ACİL DURUM",
    details: "KAPI_ZORLAMA TESPİT EDİLDİ.",
  },
];

const defaultProps = {
  logs: mockLogs,
  logFilterRoom: "all",
  logFilterType: "all" as const,
  searchQuery: "",
  operatorName: "Test Operatör",
  accessLevel: "Seviye 1",
  onNavigate: vi.fn(),
  onFilterChange: vi.fn(),
  onSearchChange: vi.fn(),
  onToggleEmergency: vi.fn(),
  onExport: vi.fn(),
};

describe("OlayGunlugu", () => {
  it("renders log entries", () => {
    render(<OlayGunlugu {...defaultProps} />);
    expect(screen.getByText("DNA Dizilimi tamamlandı.")).toBeInTheDocument();
    expect(screen.getByText("Otomatik ipucu gönderildi.")).toBeInTheDocument();
  });

  it("displays log type badges", () => {
    render(<OlayGunlugu {...defaultProps} />);
    expect(screen.getByText("BULMACA ÇÖZÜLDÜ")).toBeInTheDocument();
    expect(screen.getByText("ACİL DURUM")).toBeInTheDocument();
  });

  it("filters by room", () => {
    render(<OlayGunlugu {...defaultProps} />);
    const select = screen.getAllByRole("combobox")[0];
    fireEvent.change(select, { target: { value: "room-1" } });
    expect(defaultProps.onFilterChange).toHaveBeenCalledWith("room-1", "all");
  });

  it("filters by type", () => {
    render(<OlayGunlugu {...defaultProps} />);
    const select = screen.getAllByRole("combobox")[1];
    fireEvent.change(select, { target: { value: "emergency" } });
    expect(defaultProps.onFilterChange).toHaveBeenCalledWith("all", "emergency");
  });

  it("searches logs", () => {
    render(<OlayGunlugu {...defaultProps} />);
    const input = screen.getByPlaceholderText("Olay, detay veya referans no ara...");
    fireEvent.change(input, { target: { value: "DNA" } });
    expect(defaultProps.onSearchChange).toHaveBeenCalledWith("DNA");
  });

  it("exports CSV", () => {
    render(<OlayGunlugu {...defaultProps} />);
    fireEvent.click(screen.getByText(/CSV Dışa Aktar/));
    expect(defaultProps.onExport).toHaveBeenCalledWith("csv");
  });

  it("exports JSON", () => {
    render(<OlayGunlugu {...defaultProps} />);
    fireEvent.click(screen.getByText(/JSON Dışa Aktar/));
    expect(defaultProps.onExport).toHaveBeenCalledWith("json");
  });

  it("shows empty state when no logs", () => {
    render(<OlayGunlugu {...defaultProps} logs={[]} />);
    expect(screen.getByText(/Kayıt bulunamadı/)).toBeInTheDocument();
  });

  it("toggles emergency stop", () => {
    render(<OlayGunlugu {...defaultProps} />);
    fireEvent.click(screen.getByText(/ACİL DURDUR/));
    expect(defaultProps.onToggleEmergency).toHaveBeenCalled();
  });

  it("opens logout confirmation", () => {
    render(<OlayGunlugu {...defaultProps} />);
    fireEvent.click(screen.getAllByText("Çıkış")[0]);
    expect(screen.getByText(/Çıkış yapmak istediğinize emin misiniz/)).toBeInTheDocument();
  });

  it("opens notifications panel", () => {
    render(<OlayGunlugu {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Bildirimler"));
    expect(screen.getByText(/Bildirimler/)).toBeInTheDocument();
  });

  it("navigates via sidebar", () => {
    render(<OlayGunlugu {...defaultProps} />);
    fireEvent.click(screen.getByText("Panorama"));
    expect(defaultProps.onNavigate).toHaveBeenCalledWith("dashboard");
  });
});
