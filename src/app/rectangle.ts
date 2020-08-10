export class Rectangle {
// properties
  Height: number;
  Width: number;

  // construtor
  constructor(cHeight: number, cWidth: number) {
    // fill the properties
    this.Height = cHeight;
    this.Width = cWidth;
  }

  // method
  CalculateArea(height , width ): number {
     return height * width;
  }

}
