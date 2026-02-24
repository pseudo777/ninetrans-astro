---
title: "Creating a trading system VII - Scalping"
pubDate: 2013-01-16T00:00:00
---

![](/images_upscaled/2013-01-16_5m.png)

![](/images_upscaled/2013-01-16_results.png)

As we saw in a prior post, [tick scalping](http://ninetrans.blogspot.com/2013/01/creating-trading-system-vi-stops.html) can have a very high success rate, but is unsuitable to extract most of the value from the market. An alternative is to scalp a bar by entering on its breakout and exiting on the close. For simplicity, any potential signal bar with a close near one end of the bar suffices and we treat inside and outside bars as signal bars.

The idea is that a strong close is likely to give a large entry bar and we try to capture most of the move of the entry bar and exit on its close. Sometimes the entry bar is weak but is followed by another signal bar (b3 followed by b4) or is followed by a breakout bar (b24 followed by b25), therefore it makes sense to hold for a follow through bar after the entry bar and exit on its close.

When the follow through bar is another signal in the same direction, we do not need to exit and re-enter. Therefore, b15 long would not be exited on b17 close since you would have to buy b17 right after.

As you can see from the results, long trades worked very well and short trades failed. At this point, we see the concept of trend. The strength of a trade is tied to the strength of the trend. With the trend, almost any trade works and counter to the trend, almost any trend fails.

Using this technique, we can extract a lot more value from the market. We can develop this style to improve win-rate and value extracted from the market.