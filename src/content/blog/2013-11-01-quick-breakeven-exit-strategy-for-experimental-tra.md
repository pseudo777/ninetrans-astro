---
title: "Quick breakeven exit strategy for experimental trades"
pubDate: 2013-11-01T00:00:00
---

![](/images_upscaled/2013-11-01_5m.png)

![](/images_upscaled/2013-11-01_results.png)

When you start out trading your primary concern should simply be avoiding total destruction of your account. This is a hard goal to achieve, but one of the ways many traders approach this is to quickly move to breakeven when possible. This means that you give up potential profits in exchange for lower risk. All experimental trades (where you are trading to collect data rather than make money) are also traded in the same manner.

There are many breakeven strategies and this the one I'm currently trying:

- Trade 3 contracts with -10t stop
- Exit the first one at +10t
- On fill, tighten stop to -5t
- Exit second contract at 20t and tighten stop to entry price
- Exit last contract at 40t (or swing last contract)

Your varying degrees of success are:

1. Trade fails: -30t
2. First target filled but pullback is 5t or more: 0t
3. Second target is filled followed by 0t stop taken out: 30t
4. Third target is filled: 70t

Lets assume that the chances of the outcomes are as follows

1. Half your trades will breakeven: -0t: 50%
2. Of the remaining, half will be total losers: -30t: 25%
3. Of the remaining, half will work for profit: 30t: 12.5%
4. Remainder: 70t: 12.5%

Your net average chances of a win are about 5t per trade, barely enough to cover commissions. However, you never really had hopes of winning trading a different exit strategy anyway, so this approach may work better simply by reducing the risk of losing from 50% to 25%. Note that you are now able to trade breakeven with only 25% win rate, which is a significant lifeline for a novice trader.