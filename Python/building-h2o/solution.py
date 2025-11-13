import threading

class H2O:
    def __init__(self):
        self.hydrogen_semaphore = threading.Semaphore(2)
        self.oxygen_semaphore = threading.Semaphore(1)
        self.barrier = threading.Barrier(3)

    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:
        self.hydrogen_semaphore.acquire()
        self.barrier.wait()
        releaseHydrogen()
        self.hydrogen_semaphore.release()

    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:
        self.oxygen_semaphore.acquire()
        self.barrier.wait()
        releaseOxygen()
        self.oxygen_semaphore.release()

def releaseHydrogen():
    print("H", end='')

def releaseOxygen():
    print("O", end='')

if __name__ == "__main__":
    water = "OOHHHH"
    h2o = H2O()

    threads = []
    for molecule in water:
        if molecule == 'H':
            threads.append(threading.Thread(target=h2o.hydrogen, args=(releaseHydrogen,)))
        elif molecule == 'O':
            threads.append(threading.Thread(target=h2o.oxygen, args=(releaseOxygen,)))

    for t in threads:
        t.start()
    for t in threads:
        t.join()
