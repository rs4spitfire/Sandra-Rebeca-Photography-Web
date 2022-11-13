declare module "*.ttf" {
    const value: import("BOD_R").FontSource;
    export default value;
  }

declare module "*.otf"{
    const value: import("BodoniMTStd.otf").FontSource;
    export default value;
}