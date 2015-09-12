background(0);
size(500,500);
int x=20;
int y=20;
int count=0;
while (count<24)
{
  while(x<=480)
  {
    fill(255);
    ellipse(x,y,18,18);
    x=x+20;
  }
  x=20;
  y=y+20;
  count++;
}
