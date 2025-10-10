# Assembly

## Official Install Video

[1upRestorations](https://1uprestorations.com) has graciously provided an [official install video](https://youtu.be/3N_iRRNhPbA).

## General Guidelines

**Please carefully follow the following steps**

* Discharge the donor unit with power on while unplugged before starting. There is no bleeder on the filter cap, so it retains charge and can cause damage to the sytem or blow the fuse if you do not discharge it before working on the unit.

* Build the sound and controller modules first and test them independently. 
  * If your donor is working, you can test your sound module in it before removing the chips from the motherboard. 
  * The system will not boot if the audio module doesnt work, so being able to verify that piece independently is very nice. 
  * Hakko FR-301 with 1.6mm tip makes quick work of swapping the controller input board.

* Before doing anything on the mainboard, I recommend protecting the ENIG ground plane on the new board with kapton tape. 
  * **WARNING: If you contaminate the ENIG gold with solder it is PERMANENT DAMAGE. There is no getting it out without the ENIG being replated and the solder will ruin the beautiful gold look** 
  * Additionally, there are many small enig test pads all over the back of the board. 
     * You will need to decide how OCD you will be about contamination. 
     * When I assembled my first board by hand I moved a small piece of kapton around as I went to protect these. As such, my board retained a very pretty gold emphasis.
     * You must control paste very well to not contaminate the pads if you are using an oven/hotplate/hotair assembly. If you want it to be perfect I recommend hand soldering with kapton shields.

* There are several options for assembly
  * You can solder each part by hand. 
  * You can pre-tin the pads and transfer with hot tweezers if you have them. 
    * Transplants can also be done extremely fast that way.
  * You can dispense solder paste, place the parts, and bake them in a reflow oven or on a hot-plate
  * Clean the board good with IPA before testing. Some types of flux are conductive and can cause shorts.
    * If you have an ultrasonic cleaner, I recommend using it, but do so *before* installing the Crystal Oscillators / Ceramic Resonators as they can be sensitive to ultrasonic cleaning.
    * If you do not have one, a great budget strategy is to take a gallon freezer bag, pour IPA into it, and put the board inside. You can gently shake it, as well as reach in a tooth brush and scrub with more volume, and without the IPA evaporating quickly.
* I recommend doing the back side first or the board wont sit level while youre doing it and that sucks

* Before soldering any chips **pre-tin all of the pads or you'll have a difficult time especially if you are a novice**. 
  * The easiest way is if you have a spatula tip, as that can quickly pre-tin them evenly with little risk of burning a pad. I do it around 300c with a little flux.
  * If you do not have a spatula tip, wick away excess solder so that when you place the chip it lays flat, otherwise you'll have trouble with alignment

* After soldering chips, poke test each leg with tweezers for any loose. 
  * Looks can be highly deceiving and so can the multimeter as the pressure from the tip will often provide enough pressure to conduct even if its loose.
  * The most common cause of issues is a loose QFP leg or cold joint on one.

