## 性能对比

- Node: v16.14.0

|             | version | Requests/sec | Transfer/sec | Latency | Memory |
| ----------- | ------- | ------------ | ------------ | ------- | ------ |
| http        | -       | 39006.28     | 6.66MB       | 6.18ms  | 37MB   |
| trek-engine | 1.0.5   | 36036.96     | 4.61MB       | 6.69ms  | 39MB   |
| micro       | 9.3.4   | 34085.83     | 6.66MB       | 6.18ms  |        |
| fastify     | 3.28.0  | 31469.97     | 5.25MB       | 7.66ms  | 47MB   |
| koa         | 2.13.4  | 30671.38     | 5.12MB       | 7.85ms  | 41MB   |
| express     | 4.17.3  | 9929.53      | 2.25MB       | 24.26ms | 43MB   |
| egg         | 2.35.0  | 13294.07     | 2.25MB       | 18.12ms | 60MB   |

### http

```bash
~ wrk -t 12 -c 500 http://127.0.0.1:8080 -d 5m --latency
Running 5m test @ http://127.0.0.1:8080
  12 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     6.18ms  690.89us  60.98ms   82.44%
    Req/Sec     3.57k     2.50k   10.75k    43.96%
  Latency Distribution
     50%    5.93ms
     75%    6.60ms
     90%    7.06ms
     99%    7.79ms
  11706391 requests in 5.00m, 1.95GB read
  Socket errors: connect 251, read 190, write 0, timeout 0
Requests/sec:  39006.28
Transfer/sec:      6.66MB
```

### trek-engine

```bash
wrk -t 12 -c 500 http://127.0.0.1:8080 -d 5m --latency                        [5:47:51]
Running 5m test @ http://127.0.0.1:8080
  12 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     6.69ms  794.96us  76.35ms   84.22%
    Req/Sec     3.62k     1.55k   10.60k    49.68%
  Latency Distribution
     50%    6.42ms
     75%    7.07ms
     90%    7.70ms
     99%    8.55ms
  10808960 requests in 5.00m, 1.35GB read
  Socket errors: connect 251, read 150, write 0, timeout 241
Requests/sec:  36036.96
Transfer/sec:      4.61MB
```

### micro

```bash
✗ wrk -t 12 -c 500 http://127.0.0.1:8080 -d 5m --latency                        [1:57:44]
Running 5m test @ http://127.0.0.1:8080
  12 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.07ms  649.19us  50.83ms   88.21%
    Req/Sec     2.86k     1.39k    9.29k    69.35%
  Latency Distribution
     50%    6.88ms
     75%    7.11ms
     90%    7.92ms
     99%    9.15ms
  10228556 requests in 5.00m, 1.28GB read
  Socket errors: connect 251, read 212, write 0, timeout 0
Requests/sec:  34085.83
Transfer/sec:      4.36MB
```

### fastify

```
✗ wrk -t 12 -c 500 http://127.0.0.1:8080 -d 5m --latency                        [4:57:01]
Running 5m test @ http://127.0.0.1:8080
  12 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.66ms  828.16us  75.68ms   84.24%
    Req/Sec     2.88k     1.58k    6.43k    56.90%
  Latency Distribution
     50%    7.35ms
     75%    7.90ms
     90%    8.76ms
     99%    9.71ms
  9443512 requests in 5.00m, 1.54GB read
  Socket errors: connect 251, read 162, write 0, timeout 0
Requests/sec:  31469.97
Transfer/sec:      5.25MB
```

### koa

```bash
~ wrk -t 12 -c 500 http://127.0.0.1:8080 -d 5m --latency
Running 5m test @ http://127.0.0.1:8080
  12 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     7.85ms  667.55us  30.75ms   85.94%
    Req/Sec     3.08k     1.68k   11.13k    51.54%
  Latency Distribution
     50%    7.66ms
     75%    7.94ms
     90%    8.87ms
     99%   10.03ms
  9204206 requests in 5.00m, 1.50GB read
  Socket errors: connect 251, read 94, write 0, timeout 0
Requests/sec:  30671.38
Transfer/sec:      5.12MB
```

### express

```
✗ wrk -t 12 -c 500 http://127.0.0.1:8080 -d 5m --latency                        [5:23:43]
Running 5m test @ http://127.0.0.1:8080
  12 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    24.26ms    2.29ms 116.60ms   89.97%
    Req/Sec   832.38    594.66     1.97k    56.93%
  Latency Distribution
     50%   23.42ms
     75%   25.14ms
     90%   26.43ms
     99%   32.46ms
  2979733 requests in 5.00m, 676.32MB read
  Socket errors: connect 251, read 234, write 0, timeout 0
Requests/sec:   9929.53
Transfer/sec:      2.25MB
```

### egg

```
✗ wrk -t 12 -c 500 http://127.0.0.1:8080 -d 5m --latency                        [5:33:20]
Running 5m test @ http://127.0.0.1:8080
  12 threads and 500 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency    18.12ms    1.53ms 122.37ms   95.31%
    Req/Sec     1.67k   555.58     4.69k    44.85%
  Latency Distribution
     50%   17.67ms
     75%   18.81ms
     90%   19.20ms
     99%   23.20ms
  3989788 requests in 5.00m, 1.37GB read
  Socket errors: connect 251, read 216, write 0, timeout 0
Requests/sec:  13294.07
Transfer/sec:      4.68MB
```
