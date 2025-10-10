# Debugging

This page will cover commons checks and procedures.

## The Basics

You will need to use a multimeter for diagnostics. There are two main types of tests you will need to perform: continuity and and voltage.

### Continuity Tests
* This will test that there is an electrical connection between the two points you touch with your probes.
   * Turn multimeter to continuity mode.
   * **Before testing, unplug the unit and turn the power button on to discharge the filter cap**. You will see the power LED briefly flicker. Never test continuity with the unit plugged in as you can damage components
   * Touch the probe between the two points. You should get 0 and a beep if successful. If you do not hear a beep, the number on the screen is the resistance between the points.

## Controller Module
* Before power on, ensure the filter cap is discharged and
  * Check for short between VCC/GND
    * Power off, filter cap discharged. Ribbon connected to the board.
    * Turn to Continuity Mode
    * Touch the red probe to the VCC pin on the connector. 
    * Touch the black probe to GND. Use the GND pin on the connector
    * You should not hear a beep and should see several hundred ohms of resistance. If you hear a beep DO NOT POWER ON. Fix short first.

## Sound Module

* Before power on.. 
  * Check for short between VCC/GND
    * Power off, filter cap discharged or SHVC SOUND disconnected from motherboard
    * Turn to Continuity Mode
    * Touch the red probe to the VCC pin on the connector. 
    * Touch the black probe to GND. The shield is connected to ground, or you can use the GND pin.
    * You should not hear a beep and should see several hundred ohms of resistance. If you hear a beep DO NOT POWER ON. Fix short first.
  * Check for short between AVCC/GND
    * Power off, filter cap discharged or SHVC SOUND disconnected from motherboard
    * Turn to Continuity Mode
    * Touch the red probe to the AVCC pin on the connector.
    * Touch the black probe to GND. The shield is connected to ground, or you can use the GND pin.
    * You should not hear a beep and should see several hundred ohms of resistance. If you hear a beep DO NOT POWER ON. Fix short first.
* If the unit doesnt work, proceed in this order:
  * Verify 5V power rail
    * Multimeter in DC Voltage mode.
    * Use the VCC pin on the connector. Look for stable 5V (voltage mode, power on).
    * The shield is connected to ground, or you can use the GND pin.
    * Look for stable 9V (DC voltage mode, power on).
  * Verify 9V power rail
    * Multimeter in DC Voltage mode.
    * Touch the red probe to the the AVCC pin on the connector.
    * Touch the black probe to GND. The shield is connected to ground, or you can use the GND pin on the connector.
    * Look for stable 9V (DC voltage mode, power on).
  * Verify clock
    * The ceramic resonator is the clock, but you will destabilize it if you measure it directly. Instead check for activity on Pin 16 (CLK, lower left) on the uPD6376. If it isn't dead, you've got clock.
  * Verify SMP/DSP pins
    * Poke test each of the legs with the unit is off. Make sure not on floating
    * Use a microscope, reading glasses or your cell phone camera to check for bridges.
  * At this point the unit should be booting if attached to a working motherboard.

* If boots but no audio
  * Verify soldering in the op-amp/encoder section of the board.

* If audio sounds too quiet/loud: 
  * Check for mistakes in capacitor values in the op-amp circuit

# Motherboard

## Initial Bring Up

* Before power on:
  * Check for shorts on 5V/GND
    * Unplug unit
    * Discharge filter cap
    * Red probe right leg of 7805
    * Black probe middle.
    * No beep expected.
  * Check for shorts between 9V/GND
    * Unplug unit
    * Discharge filter cap
    * Red probe left leg of 7805
    * Black probe middle.
    * No beep expected.

* If the unit doesnt work, proceed in this order:
  * Verify power rails
    * Power On
    * DC Voltage Mode
    * 5V
      * Red Probe: Right leg of 7805
      * Black Probe: Use the exposed GND rim to prevent accidental short from touching your probes.
    * 9V
      * Red Probe: Left leg of 7805
      * Black Probe: Use the exposed GND rim to prevent accidental short from touching your probes.
  * Verify clocks
    * Voltage probe for life on CIC CLK (see schmatic)
    * Voltage probe for life on SYSCLK (see schmatic)
  * Verify Sound module
    * See above section for tests
  * Verify CIC

**At this point should be booting in some form**

## Further Troubleshooting
* No Power:
  * Check fuse. Not resettable so if blown needs to be replaced. Do not use slow blow fuses. 
    * Unplug unit
    * Discharge filter cap
    * Continuity test across the fuse
    * Multimeter should beep
  * If installing a resettable fuse, make sure its fast blow at least as fast as the pico fuse or the hardware may be damaged. 
  * A slow blow fuse will likely damage things before tripping.

* Power Brownout (power is significantly less than 5v at the 7805 output)
  * Make sure you used the right diode arrays in the right spot. If they are swapped you will brown out.

* Black Screen
  * If you have CPU 2A, pray it wasn't dead if you didn't verify it before-hand with the SNES burn in test.
  * Verify CPU<->S-WRAM pins
    * Poke test all legs

* Scrambled graphics:
  * Verify PPU<->VRAM pins
    * Poke test all legs

* Bad Color:
  * Verify video output lines (RGB, etc) lines
    * Use the color codes lines on the schematic.
    * First inspect for soldeirng issues
    * Probe for life at each point.
    * In particular, check the transistors.

* No Input
  * Verify connector/ribbon orientations
