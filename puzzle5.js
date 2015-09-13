background(0);
size(500,500);
int x=20;
int y=20;
int z=480;
while(x!=z)
  {
    while (x<z)
      {
        ellipse(x,y,18,18);
        fill(255);
        noStroke();
        x=x+20;
      }
  y=y+20;
  x=(x-z)+y;
  z=z-20;
  }
