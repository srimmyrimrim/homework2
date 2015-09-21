background(0);
size(500,500);
int x=20;
int y=20;
while(y<480)
  {
    while (x<width-y)
      {
        ellipse(x,y,18,18);
        fill(255);
        noStroke();
        x=x+20;
      }
  y=y+20;
  x=y;
  }
