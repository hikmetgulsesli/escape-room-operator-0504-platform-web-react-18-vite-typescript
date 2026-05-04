import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SistemAyarlari } from "../screens/SistemAyarlari";
import type { AppSettings } from "../types/domain";

const mockSettings: AppSettings = {
  operatorName: "Test Operatör",
  accessLevel: "Seviye 1",
  soundAlerts: true,
  darkMode: true,
  email: "test@escape-room.local",
  phone: "+90 555 999 8888",
  avatarUrl: "",
  bio: "Test operatör biyografisi.",
  notificationsEnabled: true,
  autoBackup: false,
  language: "tr",
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

  it("updates email", () => {
    render(<SistemAyarlari {...defaultProps} />);
    const input = screen.getByDisplayValue("test@escape-room.local");
    fireEvent.change(input, { target: { value: "yeni@email.com" } });
    expect(defaultProps.onUpdateSettings).toHaveBeenCalledWith({ email: "yeni@email.com" });
  });

  it("updates phone", () => {
    render(<SistemAyarlari {...defaultProps} />);
    const input = screen.getByDisplayValue("+90 555 999 8888");
    fireEvent.change(input, { target: { value: "+90 555 000 1111" } });
    expect(defaultProps.onUpdateSettings).toHaveBeenCalledWith({ phone: "+90 555 000 1111" });
  });

  it("updates bio", () => {
    render(<SistemAyarlari {...defaultProps} />);
    const input = screen.getByDisplayValue("Test operatör biyografisi.");
    fireEvent.change(input, { target: { value: "Yeni biyografi." } });
    expect(defaultProps.onUpdateSettings).toHaveBeenCalledWith({ bio: "Yeni biyografi." });
  });

  it("toggles notifications setting", () => {
    render(<SistemAyarlari {...defaultProps} />);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[1]);
    expect(defaultProps.onUpdateSettings).toHaveBeenCalledWith({ notificationsEnabled: false });
  });

  it("toggles auto backup setting", () => {
    render(<SistemAyarlari {...defaultProps} />);
    const checkboxes = screen.getAllByRole("checkbox");
    fireEvent.click(checkboxes[2]);
    expect(defaultProps.onUpdateSettings).toHaveBeenCalledWith({ autoBackup: true });
  });

  it("toggles password section", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText("Şifre Değiştir"));
    expect(screen.getByText("YENİ ŞİFRE")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Şifre Değiştirmeyi İptal Et"));
    expect(screen.queryByText("YENİ ŞİFRE")).not.toBeInTheDocument();
  });

  it("shows password mismatch error", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText("Şifre Değiştir"));
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");
    fireEvent.change(passwordInputs[0], { target: { value: "123456" } });
    fireEvent.change(passwordInputs[1], { target: { value: "654321" } });
    fireEvent.click(screen.getByText("Değişiklikleri Kaydet"));
    expect(screen.getByText("Şifreler eşleşmiyor!")).toBeInTheDocument();
  });

  it("shows password length error", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText("Şifre Değiştir"));
    const passwordInputs = screen.getAllByPlaceholderText("••••••••");
    fireEvent.change(passwordInputs[0], { target: { value: "123" } });
    fireEvent.change(passwordInputs[1], { target: { value: "123" } });
    fireEvent.click(screen.getByText("Değişiklikleri Kaydet"));
    expect(screen.getByText("Şifre en az 6 karakter olmalıdır.")).toBeInTheDocument();
  });

  it("saves settings successfully", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByText("Değişiklikleri Kaydet"));
    expect(screen.getByText("Kaydedildi")).toBeInTheDocument();
  });

  it("opens notifications panel", () => {
    render(<SistemAyarlari {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Bildirimler"));
    expect(screen.getByText("Yeni sistem güncellemesi mevcut.")).toBeInTheDocument();
  });
});
