import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SistemAyarlari } from "../screens/SistemAyarlari";
import type { AppSettings } from "../types/domain";

const mockSettings: AppSettings = {
  operatorName: "Test Operatör",
  accessLevel: "Seviye 1",
  soundAlerts: true,
  darkMode: true,
};

const defaultProps = {
  settings: mockSettings,
  onNavigate: vi.fn(),
  onUpdateSettings: vi.fn(),
  onClearStorage: vi.fn(),
  onExport: vi.fn(),
  onImport: vi.fn(),
  onReset: vi.fn(),
  onToggleEmergency: vi.fn(),
};

describe("SistemAyarlari", () => {
  it("renders settings page", () => {
    render(<SistemAyarlari {...defaultProps} />);
    expect(screen.getByRole("heading", { name: "Sistem Ayarları" })).toBeInTheDocument();
  });

  it("toggles sound alerts", () => {
    render(<SistemAyarlari {...defaultProps} />);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[0]);
    expect(defaultProps.onUpdateSettings).toHaveBeenCalledWith({ soundAlerts: false });
  });

  it("updates operator name", () => {
    render(<SistemAyarlari {...defaultProps} />);
    const input = screen.getByDisplayValue("Test Operatör");
    fireEvent.change(input, { target: { value: "Yeni İsim" } });
    expect(defaultProps.onUpdateSettings).toHaveBeenCalledWith({ operatorName: "Yeni İsim" });
  });

  it("clears storage", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText(/LocalStorage Temizle/));
    expect(defaultProps.onClearStorage).toHaveBeenCalled();
  });

  it("exports data", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText(/Veriyi Dışa Aktar/));
    expect(defaultProps.onExport).toHaveBeenCalled();
  });

  it("imports data", () => {
    render(<SistemAyarlari {...defaultProps} />);
    const textarea = screen.getByPlaceholderText("JSON veriyi buraya yapıştırın...");
    fireEvent.change(textarea, { target: { value: '{"test": true}' } });
    fireEvent.click(screen.getByText(/Yedekten Yükle/));
    expect(defaultProps.onImport).toHaveBeenCalledWith('{"test": true}');
  });

  it("shows reset confirmation", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText(/FABRİKA AYARLARINA DÖN/));
    expect(screen.getByText(/Emin misiniz/)).toBeInTheDocument();
  });

  it("resets to defaults", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText(/FABRİKA AYARLARINA DÖN/));
    fireEvent.click(screen.getByText(/EVET, SIFIRLA/));
    expect(defaultProps.onReset).toHaveBeenCalled();
  });

  it("cancels reset", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText(/FABRİKA AYARLARINA DÖN/));
    fireEvent.click(screen.getByText(/İPTAL/));
    expect(screen.queryByText(/Emin misiniz/)).not.toBeInTheDocument();
  });

  it("toggles emergency stop", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText(/ACİL DURDUR/));
    expect(defaultProps.onToggleEmergency).toHaveBeenCalled();
  });

  it("opens logout confirmation", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getAllByText("Çıkış")[0]);
    expect(screen.getByText(/Çıkış yapmak istediğinize emin misiniz/)).toBeInTheDocument();
  });

  it("navigates via sidebar", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText("Panorama"));
    expect(defaultProps.onNavigate).toHaveBeenCalledWith("dashboard");
  });

  it("opens notifications panel", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Bildirimler"));
    expect(screen.getByText(/Bildirimler/)).toBeInTheDocument();
  });
});
