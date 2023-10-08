"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{2173:function(t,r,e){var i=e(4836);r.Z=void 0;var s=i(e(4938)),f=e(5893),n=(0,s.default)((0,f.jsx)("path",{d:"M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3 3 4.27l6.01 6.01V11c0 1.66 1.33 3 2.99 3 .22 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"}),"MicOff");r.Z=n},9645:function(t){function r(t){if(this.size=0|t,this.size<=1||(this.size&this.size-1)!=0)throw Error("FFT size must be a power of two and bigger than 1");this._csize=t<<1;for(var r=Array(2*this.size),e=0;e<r.length;e+=2){let t=Math.PI*e/this.size;r[e]=Math.cos(t),r[e+1]=-Math.sin(t)}this.table=r;for(var i=0,s=1;this.size>s;s<<=1)i++;this._width=i%2==0?i-1:i,this._bitrev=Array(1<<this._width);for(var f=0;f<this._bitrev.length;f++){this._bitrev[f]=0;for(var n=0;n<this._width;n+=2){var h=this._width-n-2;this._bitrev[f]|=(f>>>n&3)<<h}}this._out=null,this._data=null,this._inv=0}t.exports=r,r.prototype.fromComplexArray=function(t,r){for(var e=r||Array(t.length>>>1),i=0;i<t.length;i+=2)e[i>>>1]=t[i];return e},r.prototype.createComplexArray=function(){let t=Array(this._csize);for(var r=0;r<t.length;r++)t[r]=0;return t},r.prototype.toComplexArray=function(t,r){for(var e=r||this.createComplexArray(),i=0;i<e.length;i+=2)e[i]=t[i>>>1],e[i+1]=0;return e},r.prototype.completeSpectrum=function(t){for(var r=this._csize,e=r>>>1,i=2;i<e;i+=2)t[r-i]=t[i],t[r-i+1]=-t[i+1]},r.prototype.transform=function(t,r){if(t===r)throw Error("Input and output buffers must be different");this._out=t,this._data=r,this._inv=0,this._transform4(),this._out=null,this._data=null},r.prototype.realTransform=function(t,r){if(t===r)throw Error("Input and output buffers must be different");this._out=t,this._data=r,this._inv=0,this._realTransform4(),this._out=null,this._data=null},r.prototype.inverseTransform=function(t,r){if(t===r)throw Error("Input and output buffers must be different");this._out=t,this._data=r,this._inv=1,this._transform4();for(var e=0;e<t.length;e++)t[e]/=this.size;this._out=null,this._data=null},r.prototype._transform4=function(){var t,r,e=this._out,i=this._csize,s=1<<this._width,f=i/s<<1,n=this._bitrev;if(4===f)for(t=0,r=0;t<i;t+=f,r++){let e=n[r];this._singleTransform2(t,e,s)}else for(t=0,r=0;t<i;t+=f,r++){let e=n[r];this._singleTransform4(t,e,s)}var h=this._inv?-1:1,o=this.table;for(s>>=2;s>=2;s>>=2){var a=(f=i/s<<1)>>>2;for(t=0;t<i;t+=f)for(var u=t+a,l=t,_=0;l<u;l+=2,_+=s){let t=l,r=t+a,i=r+a,s=i+a,f=e[t],n=e[t+1],u=e[r],p=e[r+1],c=e[i],d=e[i+1],v=e[s],m=e[s+1],g=o[_],y=h*o[_+1],b=u*g-p*y,B=u*y+p*g,w=o[2*_],z=h*o[2*_+1],A=c*w-d*z,T=c*z+d*w,I=o[3*_],F=h*o[3*_+1],L=v*I-m*F,S=v*F+m*I,E=f+A,M=n+T,x=f-A,C=n-T,k=b+L,N=B+S,R=h*(b-L),V=h*(B-S),P=E+k,Z=M+N,$=E-k,j=M-N,H=x+V,O=C-R,X=x-V,q=C+R;e[t]=P,e[t+1]=Z,e[r]=H,e[r+1]=O,e[i]=$,e[i+1]=j,e[s]=X,e[s+1]=q}}},r.prototype._singleTransform2=function(t,r,e){let i=this._out,s=this._data,f=s[r],n=s[r+1],h=s[r+e],o=s[r+e+1];i[t]=f+h,i[t+1]=n+o,i[t+2]=f-h,i[t+3]=n-o},r.prototype._singleTransform4=function(t,r,e){let i=this._out,s=this._data,f=this._inv?-1:1,n=2*e,h=3*e,o=s[r],a=s[r+1],u=s[r+e],l=s[r+e+1],_=s[r+n],p=s[r+n+1],c=s[r+h],d=s[r+h+1],v=o+_,m=a+p,g=o-_,y=a-p,b=u+c,B=l+d,w=f*(u-c),z=f*(l-d);i[t]=v+b,i[t+1]=m+B,i[t+2]=g+z,i[t+3]=y-w,i[t+4]=v-b,i[t+5]=m-B,i[t+6]=g-z,i[t+7]=y+w},r.prototype._realTransform4=function(){var t,r,e=this._out,i=this._csize,s=1<<this._width,f=i/s<<1,n=this._bitrev;if(4===f)for(t=0,r=0;t<i;t+=f,r++){let e=n[r];this._singleRealTransform2(t,e>>>1,s>>>1)}else for(t=0,r=0;t<i;t+=f,r++){let e=n[r];this._singleRealTransform4(t,e>>>1,s>>>1)}var h=this._inv?-1:1,o=this.table;for(s>>=2;s>=2;s>>=2){var a=(f=i/s<<1)>>>1,u=a>>>1,l=u>>>1;for(t=0;t<i;t+=f)for(var _=0,p=0;_<=l;_+=2,p+=s){var c=t+_,d=c+u,v=d+u,m=v+u,g=e[c],y=e[c+1],b=e[d],B=e[d+1],w=e[v],z=e[v+1],A=e[m],T=e[m+1],I=o[p],F=h*o[p+1],L=b*I-B*F,S=b*F+B*I,E=o[2*p],M=h*o[2*p+1],x=w*E-z*M,C=w*M+z*E,k=o[3*p],N=h*o[3*p+1],R=A*k-T*N,V=A*N+T*k,P=g+x,Z=y+C,$=g-x,j=y-C,H=L+R,O=S+V,X=h*(L-R),q=h*(S-V),D=P+H,G=Z+O,J=$+q,K=j-X;if(e[c]=D,e[c+1]=G,e[d]=J,e[d+1]=K,0===_){var Q=P-H,U=Z-O;e[v]=Q,e[v+1]=U;continue}if(_!==l){var W=-h*q,Y=-h*X,tt=-h*O,tr=$+W,te=-j+Y,ti=P+-h*H,ts=-Z-tt,tf=t+u-_,tn=t+a-_;e[tf]=tr,e[tf+1]=te,e[tn]=ti,e[tn+1]=ts}}}},r.prototype._singleRealTransform2=function(t,r,e){let i=this._out,s=this._data,f=s[r],n=s[r+e];i[t]=f+n,i[t+1]=0,i[t+2]=f-n,i[t+3]=0},r.prototype._singleRealTransform4=function(t,r,e){let i=this._out,s=this._data,f=this._inv?-1:1,n=s[r],h=s[r+e],o=s[r+2*e],a=s[r+3*e],u=n+o,l=n-o,_=h+a,p=f*(h-a);i[t]=u+_,i[t+1]=0,i[t+2]=l,i[t+3]=-p,i[t+4]=u-_,i[t+5]=0,i[t+6]=l,i[t+7]=p}},1543:function(t,r,e){e.d(r,{X:function(){return f}});var i=e(9645);class s{_inputLength;_fft;_bufferSupplier;_paddedInputBuffer;_transformBuffer;_inverseBuffer;static forFloat32Array(t){return new s(t,t=>new Float32Array(t))}static forFloat64Array(t){return new s(t,t=>new Float64Array(t))}static forNumberArray(t){return new s(t,t=>Array(t))}constructor(t,r){var e;if(t<1)throw Error("Input length must be at least one");this._inputLength=t,this._fft=new i((e=2*t,e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,++e)),this._bufferSupplier=r,this._paddedInputBuffer=this._bufferSupplier(this._fft.size),this._transformBuffer=this._bufferSupplier(2*this._fft.size),this._inverseBuffer=this._bufferSupplier(2*this._fft.size)}get inputLength(){return this._inputLength}autocorrelate(t,r=this._bufferSupplier(t.length)){if(t.length!==this._inputLength)throw Error(`Input must have length ${this._inputLength} but had length ${t.length}`);for(let r=0;r<t.length;r++)this._paddedInputBuffer[r]=t[r];for(let r=t.length;r<this._paddedInputBuffer.length;r++)this._paddedInputBuffer[r]=0;this._fft.realTransform(this._transformBuffer,this._paddedInputBuffer),this._fft.completeSpectrum(this._transformBuffer);let e=this._transformBuffer;for(let t=0;t<e.length;t+=2)e[t]=e[t]*e[t]+e[t+1]*e[t+1],e[t+1]=0;this._fft.inverseTransform(this._inverseBuffer,this._transformBuffer);for(let e=0;e<t.length;e++)r[e]=this._inverseBuffer[2*e];return r}}class f{_autocorrelator;_nsdfBuffer;_clarityThreshold=.9;static forFloat32Array(t){return new f(t,t=>new Float32Array(t))}static forFloat64Array(t){return new f(t,t=>new Float64Array(t))}static forNumberArray(t){return new f(t,t=>Array(t))}constructor(t,r){this._autocorrelator=new s(t,r),this._nsdfBuffer=r(t)}get inputLength(){return this._autocorrelator.inputLength}findPitch(t,r){this._nsdf(t);let e=function(t){let r=[],e=!1,i=-1/0,s=-1;for(let f=1;f<t.length-1;f++)t[f-1]<=0&&t[f]>0?(e=!0,s=f,i=t[f]):t[f-1]>0&&t[f]<=0?(e=!1,-1!==s&&r.push(s)):e&&t[f]>i&&(i=t[f],s=f);return r}(this._nsdfBuffer);if(0===e.length)return[0,0];let i=Math.max(...e.map(t=>this._nsdfBuffer[t])),s=e.find(t=>this._nsdfBuffer[t]>=this._clarityThreshold*i),[f,n]=function(t,r){let[e,i,s]=[t-1,t,t+1],[f,n,h]=[r[e],r[i],r[s]],o=f/2-n+h/2,a=-(f/2)*(i+s)+n*(e+s)-h/2*(e+i),u=-a/(2*o);return[u,o*u*u+a*u+(f*i*s/2-n*e*s+h*e*i/2)]}(s,this._nsdfBuffer);return[r/f,Math.min(n,1)]}_nsdf(t){let r;this._autocorrelator.autocorrelate(t,this._nsdfBuffer);let e=2*this._nsdfBuffer[0];for(r=0;r<this._nsdfBuffer.length&&e>0;r++)this._nsdfBuffer[r]=2*this._nsdfBuffer[r]/e,e-=t[r]**2+t[t.length-r-1]**2;for(;r<this._nsdfBuffer.length;r++)this._nsdfBuffer[r]=0}}}}]);