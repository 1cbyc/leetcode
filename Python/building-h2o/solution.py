import threading

class H2O:
    def __init__(self):
        self.hydrogen_semaphore = threading.Semaphore(2)  # Maximum 2 hydrogen threads can proceed
        self.oxygen_semaphore = threading.Semaphore(1)    # Maximum 1 oxygen thread can proceed
        self.barrier = threading.Barrier(3)               # Barrier to ensure 3 threads (2 H and 1 O) proceed together

    def hydrogen(self, releaseHydrogen: 'Callable[[], None]') -> None:
        self.hydrogen_semaphore.acquire()                 # Acquire the hydrogen semaphore
        self.barrier.wait()                               # Wait at the barrier
        # releaseHydrogen() outputs "H". Do not change or remove this line.
        releaseHydrogen()
        self.hydrogen_semaphore.release()                 # Release the hydrogen semaphore

    def oxygen(self, releaseOxygen: 'Callable[[], None]') -> None:
        self.oxygen_semaphore.acquire()                   # Acquire the oxygen semaphore
        self.barrier.wait()                               # Wait at the barrier
        # releaseOxygen() outputs "O". Do not change or remove this line.
        releaseOxygen()
        self.oxygen_semaphore.release()                   # Release the oxygen semaphore

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
# i got this from chatgpt
