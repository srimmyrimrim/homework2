background(255);
size(500,500);
int x=20;
int y=20;
int count=0;
colorMode(HSB,100);

while (count<24)
{
  while(x<=480)
  {
   fill(random(100),100,100);
   noStroke();
    ellipse(x,y,18,18);
    x=x+20;
  }
  x=20;
  y=y+20;
  count++;
}
