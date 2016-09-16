const log = console.log;

var NOTES_PER_RIFF = 8;
var REST = 0;
var HOLD = 1;
var _n = (x,y) => x + (y + 1) * 12;

var C=0
var Cs=1
var Db=1
var D=2
var Ds=3
var Eb=3
var E=4
var F=5
var Fs=6
var Gb=6
var G=7
var Gs=8
var Ab=8
var A=9
var As=10
var Bb=10
var B=11   
var C_1   =	    _n(C,-1)
var Cs_1  =	    _n(Cs,-1)
var Db_1  =	    _n(Db,-1)
var D_1   =	    _n(D,-1)
var Ds_1  =	    _n(Ds,-1)
var Eb_1  =	    _n(Eb,-1)
var E_1   =	    _n(E,-1)
var F_1   =	    _n(F,-1)
var Fs_1  =	    _n(Fs,-1)
var Gb_1  =	    _n(Gb,-1)
var G_1   =	    _n(G,-1)
var Gs_1  =	    _n(Gs,-1)
var Ab_1  =	    _n(Ab,-1)
var A_1   =	    _n(A,-1)
var As_1  =	    _n(As,-1)
var Bb_1  =	    _n(Bb,-1)
var B_1   =	    _n(B,-1)
var C0    =	    _n(C,0)
var Cs0   =	    _n(Cs,0)
var Db0   =	    _n(Db,0)
var D0    =	    _n(D,0)
var Ds0   =	    _n(Ds,0)
var Eb0   =	    _n(Eb,0)
var E0    =	    _n(E,0)
var F0    =	    _n(F,0)
var Fs0   =	    _n(Fs,0)
var Gb0   =	    _n(Gb,0)
var G0    =	    _n(G,0)
var Gs0   =	    _n(Gs,0)
var Ab0   =	    _n(Ab,0)
var A0    =	    _n(A,0)
var As0   =	    _n(As,0)
var Bb0   =	    _n(Bb,0)
var B0    =	    _n(B,0)
var C1    =	    _n(C,1)
var Cs1   =	    _n(Cs,1)
var Db1   =	    _n(Db,1)
var D1    =	    _n(D,1)
var Ds1   =	    _n(Ds,1)
var Eb1   =	    _n(Eb,1)
var E1    =	    _n(E,1)
var F1    =	    _n(F,1)
var Fs1   =	    _n(Fs,1)
var Gb1   =	    _n(Gb,1)
var G1    =	    _n(G,1)
var Gs1   =	    _n(Gs,1)
var Ab1   =	    _n(Ab,1)
var A1    =	    _n(A,1)
var As1   =	    _n(As,1)
var Bb1   =	    _n(Bb,1)
var B1    =	    _n(B,1)
var C2    =	    _n(C,2)
var Cs2   =	    _n(Cs,2)
var Db2   =	    _n(Db,2)
var D2    =	    _n(D,2)
var Ds2   =	    _n(Ds,2)
var Eb2   =	    _n(Eb,2)
var E2    =	    _n(E,2)
var F2    =	    _n(F,2)
var Fs2   =	    _n(Fs,2)
var Gb2   =	    _n(Gb,2)
var G2    =	    _n(G,2)
var Gs2   =	    _n(Gs,2)
var Ab2   =	    _n(Ab,2)
var A2    =	    _n(A,2)
var As2   =	    _n(As,2)
var Bb2   =	    _n(Bb,2)
var B2    =	    _n(B,2)
var C3    =	    _n(C,3)
var Cs3   =	    _n(Cs,3)
var Db3   =	    _n(Db,3)
var D3    =	    _n(D,3)
var Ds3   =	    _n(Ds,3)
var Eb3   =	    _n(Eb,3)
var E3    =	    _n(E,3)
var F3    =	    _n(F,3)
var Fs3   =	    _n(Fs,3)
var Gb3   =	    _n(Gb,3)
var G3    =	    _n(G,3)
var Gs3   =	    _n(Gs,3)
var Ab3   =	    _n(Ab,3)
var A3    =	    _n(A,3)
var As3   =	    _n(As,3)
var Bb3   =	    _n(Bb,3)
var B3    =	    _n(B,3)
var C4    =	    _n(C,4)
var Cs4   =	    _n(Cs,4)
var Db4   =	    _n(Db,4)
var D4    =	    _n(D,4)
var Ds4   =	    _n(Ds,4)
var Eb4   =	    _n(Eb,4)
var E4    =	    _n(E,4)
var F4    =	    _n(F,4)
var Fs4   =	    _n(Fs,4)
var Gb4   =	    _n(Gb,4)
var G4    =	    _n(G,4)
var Gs4   =	    _n(Gs,4)
var Ab4   =	    _n(Ab,4)
var A4    =	    _n(A,4)
var As4   =	    _n(As,4)
var Bb4   =	    _n(Bb,4)
var B4    =	    _n(B,4)
var C5    =	    _n(C,5)
var Cs5   =	    _n(Cs,5)
var Db5   =	    _n(Db,5)
var D5    =	    _n(D,5)
var Ds5   =	    _n(Ds,5)
var Eb5   =	    _n(Eb,5)
var E5    =	    _n(E,5)
var F5    =	    _n(F,5)
var Fs5   =	    _n(Fs,5)
var Gb5   =	    _n(Gb,5)
var G5    =	    _n(G,5)
var Gs5   =	    _n(Gs,5)
var Ab5   =	    _n(Ab,5)
var A5    =	    _n(A,5)
var As5   =	    _n(As,5)
var Bb5   =	    _n(Bb,5)
var B5    =	    _n(B,5)
var C6    =	    _n(C,6)
var Cs6   =	    _n(Cs,6)
var Db6   =	    _n(Db,6)
var D6    =	    _n(D,6)
var Ds6   =	    _n(Ds,6)
var Eb6   =	    _n(Eb,6)
var E6    =	    _n(E,6)
var F6    =	    _n(F,6)
var Fs6   =	    _n(Fs,6)
var Gb6   =	    _n(Gb,6)
var G6    =	    _n(G,6)
var Gs6   =	    _n(Gs,6)
var Ab6   =	    _n(Ab,6)
var A6    =	    _n(A,6)
var As6   =	    _n(As,6)
var Bb6   =	    _n(Bb,6)
var B6    =	    _n(B,6)
var C7    =	    _n(C,7)
var Cs7   =	    _n(Cs,7)
var Db7   =	    _n(Db,7)
var D7    =	    _n(D,7)
var Ds7   =	    _n(Ds,7)
var Eb7   =	    _n(Eb,7)
var E7    =	    _n(E,7)
var F7    =	    _n(F,7)
var Fs7   =	    _n(Fs,7)
var Gb7   =	    _n(Gb,7)
var G7    =	    _n(G,7)
var Gs7   =	    _n(Gs,7)
var Ab7   =	    _n(Ab,7)
var A7    =	    _n(A,7)
var As7   =	    _n(As,7)
var Bb7   =	    _n(Bb,7)
var B7    =	    _n(B,7)
var C8    =	    _n(C,8)
var Cs8   =	    _n(Cs,8)
var Db8   =	    _n(Db,8)
var D8    =	    _n(D,8)
var Ds8   =	    _n(Ds,8)
var Eb8   =	    _n(Eb,8)
var E8    =	    _n(E,8)
var F8    =	    _n(F,8)
var Fs8   =	    _n(Fs,8)
var Gb8   =	    _n(Gb,8)
var G8    =	    _n(G,8)
var Gs8   =	    _n(Gs,8)
var Ab8   =	    _n(Ab,8)
var A8    =	    _n(A,8)
var As8   =	    _n(As,8)
var Bb8   =	    _n(Bb,8)
var B8    =	    _n(B,8)
var C9    =	    _n(C,9)
var Cs9   =	    _n(Cs,9)
var Db9   =	    _n(Db,9)
var D9    =	    _n(D,9)
var Ds9   =	    _n(Ds,9)
var Eb9   =	    _n(Eb,9)
var E9    =	    _n(E,9)
var F9    =	    _n(F,9)
var Fs9   =	    _n(Fs,9)
var Gb9   =	    _n(Gb,9)
var G9    =	    _n(G,9)
var Gs9   =	    _n(Gs,9)
var Ab9   =	    _n(Ab,9)
var A9    =	    _n(A,9)
var As9   =	    _n(As,9)
var Bb9   =	    _n(Bb,9)
var B9    =	    _n(B,9)
var NPR = 8;
var R = 0;
var H = 1;

var Riffs = [
    Eb4,  D4,  A4,  F4,  E4,  C5,  A4,  A4,  /*  0 */
    F4,  A4, Eb5,  D5,  E4,  A4,  C5,  A4,  /*  1 */
    Ab4,  A4,   A,  G5,   A,  Eb5,  C5,  E5,  /*  2 */
    Ab4,  A4,  B4,  C5, Eb5,  E5, Ab5,  A5,  /*  3 */
    A4,  Bb4,  B4,  C5, Db5,  D5, Eb5,  E5,  /*  4 */
    A4,  Bb4,  B4,  C5,  E5, Eb5,  D5,  C5,  /*  5 */
    A4,  B4,  C5,  A4,  B4,  C5,  D5,  B4,  /*  6 */
    A4,  B4,  C5,  D5, Eb5,  E5, Eb5,  C5,  /*  7 */
    A4,  C5,  D5, Eb5,  Gb5,  Ab5,  A5,  C6,  /*  8 Pat  Metheny  */
    A4,  C5, Eb5,  B4,  D5,  F5, Eb5,  C5,  /*  9 */
    A4,  C5,  E5,  G5,  B5,  A5,  G5,  E5,  /* 10  */
    A4,  C5,  E5,  A5,  G5, Eb5,  C5,  A4,  /* 11  */
    B4,  A4,  B4,  C5,  B4,  A4,  B4,  C5,  /* 12  */
    B4,  A4,  B4,  C5,  B4,  C5,  B4,  A4,  /* 13  */
    B4,  A4,  B4,  C5,  D5,  C5,  D5, Eb5,  /* 14  */
    C5, Ab4,  A4,  G5,  F5, Gb5, Eb5,  E5,  /* 15 Marty Cutler */
    C5,  D5,  C5,  B4,  C5,  B4,  A4,   A,  /* 16  */
    C5,  D5, Eb5,  C5,  D5, Eb5,  F5,  D5,  /* 17  */
    D5,  C5,  A4,  C5,  E5, Eb5,  D5,  C5,  /* 18  */
    D5,  C5,  D5, Eb5,  D5,  C5,  D5, Eb5,  /* 19  */
    D5,  Eb5,  E5,  F5, Gb5,  G5, Ab5,  A5,  /* 20  */
    D5, Eb5,  G5, Eb5,  D5,  C5,  B4,  C5,  /* 21 Charlie Keagle */
    D5,  Eb5,  A5,  D5,   A,  C5,  A4,  E4,  /* 22  */
    D5,  E5,  G5,  E5,  C5,   A,  D5,  A5,  /* 23  Lyle  Mays/Steve  Cantor  */
    Eb5,  D5, Eb5,  D5,   A,  C5,  A4,   A,  /* 24  */
    Eb5,  D5, Eb5,  F5, Eb5,  D5,  C5,  B4,  /* 25  */
    Eb5,  E5,  D5,  C5,  B4,  A4, Ab4,  A4,  /* 26  Richie  Shulberg  */
    Eb5,  E5,  A5,  C5,  B4,  E5,  A4,  A4,  /* 27  */
    Eb5,  Gb5,  E5,  A4,  B4,  D5,  C5,  E4,  /* 28  Django  Rheinhart  */
    E5,  A4,  C5, Ab4,  B4,  G4, Gb4,  E4,  /* 29  David  Levine  */
    E5,  Eb5,  D5,  C5,  B4,  C5,  D5,  F5,  /* 30  */
    G5,  E5,  D5,  B4, Eb5,   A,  C5,  A4,  /* 31  */
    G5,  E5,  D5, Gb5,  C5,   A,  A4,   A,  /* 32  Mike  Cross  */
    Ab5,  A5, Ab5,  A5, Ab5,  A5, Ab5,  A5,  /* 33  Django  Rheinhart  */
    A5,  E5,  C5,  G4,  C5,  E5,  A5,  A5,  /* 34  Django  Rheinhart  */
    A5,  E5,  C5,  A4,  G5, Eb5,  C5,  A4,  /* 35  */
    A5,  B5,  G5,  E5,  F5, Gb5,  G5, Ab5,  /* 36  */
    B5,  C6,  A5,  E5,  G5,  B5,  A5,   A,  /* 37  */
    B5,  D6,  C6,  E5, Ab5,  B5,  A5,  C5,  /* 38  Django  Rheinhart  */
    C6,  B5,  A5,  G5, Gb5,  E5, Eb5,  C5,  /* 39  */
]

var BARLEN = 480;
var NUMTRIES = 3;

var numriffs = Riffs.length;
var Lastn = 0;

main();

/**
 * Main function of the program. Expects the following parameters
 * 
 * @param {int} number of bars
 */
function main() {
    const argv = process.argv;
    
    var numbars = argv.length > 2 ? argv[1] : 2;
    var tempo = 1;
    
    for (var i = 0; i < numbars; ++i) {
        if (tempo > random(3)) --tempo;
        else if (tempo < random(3)) ++tempo;
        
        var rbp = 1 << tempo;
        var dur = BARLEN / (NPR * rbp);
        var energy = ecalc(i, numbars);
        
        for(var i = 0; i < rbp; ++i) {
           var riff = pickriff(); 
           play(riff, dur, energy);
        };
    }
    
}

function ecalc(i, numbars) {
    if (3 * i < numbars) return (100 - (90 * i))
    else if (3 * i > 2 * numbars) return (40 + (90 * i))
    
    return 70
}

function pickriff() {
    var min = 999;
    var bestr;
    
    for (var i = 0; i < NUMTRIES; ++i) {
       var riff = random(numriffs);
       if (Lastn === 0) return riff;
       var dn = Math.abs(Lstn - Riffs[riff * NPR]);
       
       if (dn === 0) dn = 6;
       if (dn < min) {
           bestr = riff;
           min = dn;
       }
    }
    return bestr;
}

function play(riff, dur, energy) {
    var Biv = [28, 0, 7, 0, 14, 0, 7, 4];
    var pn = 0;
    var pnd = 0;
    
    for (var i = 0; i < NPR; ++i) {
        var next = Riffs[riff + i];
        
        if (next !== H && next !== R && energy+Biv[i] < random(100) ) {
            next = fiftyfifty() ? R : H;
        }
        
        if (next === H) {
            pnd += dur;
            continue;
        }
        if (pnd) {
            Lstn = pn;
            plink(pn, pnd);
        }
        pn = next;
        pnd = dur;
    }
    
    plink(pn, pnd);
    if (pnd) Lstn = pnd;
}

function plink(key, dt) {
    var bp = "";
    
    if (key !== R) {
        bp += "0";
        bp += "0x90";
        bp += key;
        bp += "64";
        bp += dt;
        bp += key;
        bp += "0";
    } else {
        bp += dt;
        bp += "0xF8";
    }
    log(bp);
}


/**
 * Returns a pseudo random integer between max and min. Min defaults to 0 if unset
 * 
 * @param {int} max - upper bound. Exclusive
 * @param {int} min - lower bound. Inclusive (defaults to 0)
 * 
 * @returns {int} a pseudo random number
 */
function random(max) {
  var min = 0;
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * Returns true or false with a 50/50 percent probability
 */
function fiftyfifty() {
    return Math.floor(Math.random()*2) === 1 ? true:false;
}