# Bill of Materials (BOM)

## Parts BOM
The [following spreadsheet](https://starlightk7.github.io/OpenSFC/assets/OSFC-BOM.ods) contains a description of required donor parts for the project as well as a mouser-based BOM if you'd like to use as many new parts as possible'.

## Interactive BOMs for Placement Assistance

* [SHVC-CPU-01](https://starlightk7.github.io/OpenSFC/ibom/ibom-shvc.html)
* [SHVC-SOUND F](https://starlightk7.github.io/OpenSFC/ibom/ibom-sound.html)
* [SFC Front Panel](https://starlightk7.github.io/OpenSFC/ibom/ibom-n10.html)
* [SNES Front Panel](https://starlightk7.github.io/OpenSFC/ibom/ibom-n20.html)

## Donor Identification

### Japanese Units

These are general guidelines for identifying Japanese units. Note that there may be exceptions if someone has shell swapped units.
 * SHVC
   * 4 Rubber Feet on Bottom. This is your primary target.
 * GPM
   * 2 Rubber Feet, 2 Plastic on Bottom.
   * Serial Begins with S0/S1/S2 (no "SM")
 * RGB/APU/1-CHIP
   * 2 Rubber Feet, 2 Plastic on Bottom.
   * Serial Begins "SM"

### Compatibility Notes

#### SHVC-CPU-01 Repro
As of the time of writing, the only out of box fully compatible unit with the current SHVC-CPU-01 repro is the SHVC, because of the need for the proprietary SHVC-SOUND connectors. You can harvest chips from any broken unit though. It does not matter which revision of the chips you use. Do note though that CPU 2A is substantially more likely to fail under normal circumstances than CPU 1 or 2B. CPU 2A is found in late SHVCs and early GPMs.

A GPM unit can be converted if 2.0mm pitch pin headers of the right length are used for the SHVC-SOUND, and new op-amps are used. I am working on identifying a set that will allow it to sit cleanly on the screwpost. No support is provided for this currently until a fully compatible set of parts is identified.

Converting a RGB unit would additionally require the older BA6592F / S-ENC encoder if is RGB-01, and also the older NEC µPD6376 if RGB-02. These parts are obsolete, though can sometimes be found on AliExpress. The supply is spotty though and some sellers are scammers. Not recommended at this time until reliable part sources are identified.

Converting an APU unit is not courrently possible. A custom SHVC-SOUND that is compatible with the S-APU unit would be needed. I plan on making one in the future.

If you wish to build a North American SNES, please note that neither aftermarket shell option includes the necessary springs for the North American Shell. So you cannot have a properly functioning case with a Japanese donor. I am currently working on identifying suitable replacement springs to solve this.


