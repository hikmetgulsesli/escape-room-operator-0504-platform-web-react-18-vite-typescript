import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { AcilDurumPaneli } from "../screens/AcilDurumPaneli";

const defaultProps = {
  active: true,
  startTime: new Date(Date.now() - 5 * 60 * 1000).toISOString(),
  onResolve: vi.fn(),
  onNavigate: vi.fn(),
};

describe("AcilDurumPaneli", () => {
  it("renders when active", () => {
    render(<AcilDurumPaneli {...defaultProps} />);
    expect(screen.getByText(/TÜM SİSTEMLER DURDURULDU/)).toBeInTheDocument();
  });

  it("does not render when inactive", () => {
    render(<AcilDurumPaneli {...defaultProps} active={false} />);
    expect(screen.queryByText(/TÜM SİSTEMLER DURDURULDU/)).not.toBeInTheDocument();
  });

  it("shows emergency status", () => {
    render(<AcilDurumPaneli {...defaultProps} />);
    expect(screen.getByText(/ACİL DURUM AKTİF/)).toBeInTheDocument();
  });

  it("shows elapsed time", () => {
    render(<AcilDurumPaneli {...defaultProps} />);
    expect(screen.getByText(/00:05:00/)).toBeInTheDocument();
  });

  it("requires safety confirmation to resolve", () => {
    render(<AcilDurumPaneli {...defaultProps} />);
    const resolveButton = screen.getByText(/Güvenli Duruma Dön/);
    expect(resolveButton).toBeDisabled();
    const checkbox = screen.getByLabelText(/Tesis güvenliğinin sağlandığını/);
    fireEvent.click(checkbox);
    expect(resolveButton).not.toBeDisabled();
  });

  it("resolves emergency with note", () => {
    render(<AcilDurumPaneli {...defaultProps} />);
    const checkbox = screen.getByLabelText(/Tesis güvenliğinin sağlandığını/);
    fireEvent.click(checkbox);
    const textarea = screen.getByPlaceholderText("Acil durum nedenini buraya giriniz... Olay günlüğüne otomatik kaydedilecektir.");
    fireEvent.change(textarea, { target: { value: "Test notu" } });
    fireEvent.click(screen.getByText(/Güvenli Duruma Dön/));
    expect(defaultProps.onResolve).toHaveBeenCalledWith("Test notu");
  });

  it("resolves emergency without note", () => {
    render(<AcilDurumPaneli {...defaultProps} />);
    const checkbox = screen.getByLabelText(/Tesis güvenliğinin sağlandığını/);
    fireEvent.click(checkbox);
    fireEvent.click(screen.getByText(/Güvenli Duruma Dön/));
    expect(defaultProps.onResolve).toHaveBeenCalledWith("");
  });
});
