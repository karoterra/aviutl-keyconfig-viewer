const enum VK {
  Back = 0x08,
  Tab = 0x09,
  Return = 0x0d,
  Space = 0x20,
  PageUp = 0x21,
  PageDown = 0x22,
  End = 0x23,
  Home = 0x24,
  Insert = 0x2d,
  Delete = 0x2e,
  Left = 0x25,
  Up = 0x26,
  Right = 0x27,
  Down = 0x28,
  Zero = 0x30,
  Nine = 0x39,
  A = 0x41,
  Z = 0x5a,
  Numpad0 = 0x60,
  Numpad9 = 0x69,
  Multiply = 0x6a,
  Add = 0x6b,
  Subtract = 0x6d,
  Decimal = 0x6e,
  Divide = 0x6f,
  F1 = 0x70,
  F12 = 0x7b,
  Colon = 0xba,
  Semicolon = 0xbb,
  Comma = 0xbc,
  Hyphen = 0xbd,
  Period = 0xbe,
  Slash = 0xbf,
  At = 0xc0,
  BracketLeft = 0xdb,
  Yen = 0xdc,
  BracketRight = 0xdd,
  Caret = 0xde,
  Backslash = 0xe2,
}

export class Key {
  readonly shift: boolean;
  readonly ctrl: boolean;
  readonly alt: boolean;
  readonly code: VK;

  constructor(flag: number, code: number) {
    this.shift = (flag & 0x01) != 0;
    this.ctrl = (flag & 0x02) != 0;
    this.alt = (flag & 0x04) != 0;
    this.code = code;
  }

  get name(): string {
    const x = this.code;
    switch (x) {
      case VK.Back:
        return "BackSpace";
      case VK.Tab:
        return "Tab";
      case VK.Return:
        return "Enter";
      case VK.Space:
        return "Space";
      case VK.PageUp:
        return "PageUp";
      case VK.PageDown:
        return "PageDown";
      case VK.End:
        return "End";
      case VK.Home:
        return "Home";
      case VK.Insert:
        return "Insert";
      case VK.Delete:
        return "Delete";
      case VK.Left:
        return "←";
      case VK.Up:
        return "↑";
      case VK.Right:
        return "→";
      case VK.Down:
        return "↓";
      case VK.Multiply:
        return "Numpad *";
      case VK.Add:
        return "Numpad +";
      case VK.Subtract:
        return "Numpad -";
      case VK.Decimal:
        return "Numpad .";
      case VK.Divide:
        return "Numpad /";
      case VK.Colon:
        return ":";
      case VK.Semicolon:
        return ";";
      case VK.Comma:
        return ",";
      case VK.Hyphen:
        return "-";
      case VK.Period:
        return ".";
      case VK.Slash:
        return "/";
      case VK.At:
        return "@";
      case VK.BracketLeft:
        return "[";
      case VK.Yen:
        return "¥";
      case VK.BracketRight:
        return "]";
      case VK.Caret:
        return "^";
      case VK.Backslash:
        return "＼";
      default:
        if ((VK.Zero <= x && x <= VK.Nine) || (VK.A <= x && x <= VK.Z))
          return String.fromCharCode(x);
        if (VK.F1 <= x && x <= VK.F12) return `F${x - VK.F1 + 1}`;
        if (VK.Numpad0 <= x && x <= VK.Numpad9)
          return `Numpad ${x - VK.Numpad0}`;
        return `Key code ${x}`;
    }
  }
}
