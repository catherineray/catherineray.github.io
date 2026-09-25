from numpy.fft import *
from numpy import median, std, linspace, pi
from pylab import plot, show, title, xlabel, ylabel, subplot
from scipy import fft, arange
import numpy
import scipy
import sys
import scipy.io.wavfile


def wav_to_arr(wavefile):

    # get relevant info about file
    fs, sig = scipy.io.wavfile.read(f)
    framerate = fs
    nframes = len(sig)
    params = [framerate, nframes]
    
    return sig, params


def plot_signal(wav_arr):
    """
    2 Plots: (0) amplitude vs. time & (1) amplitude spectrum.
    """
    y = wav_arr
    Fs = len(y);  # sampling rate
    Ts = 1.0/Fs; # sampling interval    
    t = arange(0,1,Ts) # time vector
    
    subplot(2,1,1)
    plot(t,y)
    xlabel('Time')
    ylabel('Amplitude')
    subplot(2,1,2)
    plotSpectrum(y,Fs)
    show()  


def plotSpectrum(y,Fs):
    """
    Plots a Single-Sided Amplitude Spectrum of y(t)
    """
    n = len(y) # length of the signal
    k = arange(n)
    T = n/Fs
    frq = k/T # two sides frequency range
    frq = frq[range(n/2)] # one side frequency range

    Y = fft(y)/n # fft computing and normalization
    Y = Y[range(n/2)]
    Y = abs(Y) #single-sided

    print median(Y) + std(Y)
    #print [y for y in Y if y > median(Y)+std(Y)]
 
    plot(frq,abs(Y),'r') # plotting the spectrum
    xlabel('Freq (Hz)')
    ylabel('|Y(freq)|')


def extract_snibbets(wav_arr):
    for frame in range(0,len(wav_arr)):
        #if frame > noise_floor(wav_arr):
        if frame > 6:
            snibbet.append(frame)
        else: 
            snibbet.append("0") #placeholder

#def syllable():            


#def noise_floor(n): #adaptive noise floor

if __name__=="__main__":
    f = "t.wav"
    #f = sys.argv[1]
    #convert *.wav to array
    wav_arr, params = wav_to_arr(f)
    plot_signal(wav_arr)
