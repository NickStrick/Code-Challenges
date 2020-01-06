# dubstep printer
def song_decoder(song):
    song = song.split("WUB")

    while("" in song):
        song.remove("")
    song = " ".join(song)

    return song
