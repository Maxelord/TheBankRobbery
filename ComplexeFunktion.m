% Name: Julian Wolters
% Letzten beiden Ziffern der Matrikelnummer: 2 und 2
% 2+2=4 und 10+2=12

t = 0:.01:10;
y = exp((-.4+i*12)*t);
plot(t,real(y), t,imag(y));
grid on