# OpenSFC

## Introduction

This repository contains OSHW Reproduction Parts related to the Super Famicom (SFC) / Super NES (SNES) game console under the umbrella name OpenSFC. While these parts are primarily developed from the Super Famicom models, you can build a North American SNES as well as long as you use the appropriate front and rear panels. See the documentation for details.

<div><img src="https://starlightk7.github.io/OpenSFC/assets/osfc-intro.jpg" height="400" width="300"/></div>

These parts are freely available under the terms of the [CERN-OHL-S](https://github.com/starlightk7/OpenSFC/blob/main/LICENSE) license for you to use, study, modify, or sell. The source files are provided as-is with no warranty or entitlement for support to you or any users that you sell manufactured boards to. See [LICENSE](https://github.com/starlightk7/OpenSFC/blob/main/LICENSE) and [NOTICE](https://github.com/starlightk7/OpenSFC/blob/main/NOTICE) for details. Please carefully read these files to understand your obligations if you choose to distribute this project or modifications of it.

The project officially distributes boards from [Japan (inexpensive international shipping available)](https://ko-fi.com/starlightk7/shop), the [US](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) and the [UK](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle). If you just wish to simply obtain a board for yourself, it will often be cheaper than ordering from the fab directly. 

***No support is provided for fabricating these files on your own. If you choose that route, you should understand what you are doing and are responsible for ensuring it is done right. I am not responsible for any defects that may arise from improperly manufacturing these files, or for defects arising from modifications made by you or your PCB fab during manufacturing. If you produce these boards for sale without becoming an authorized distributor, you are responsible for any and all customer support related to the product as well as your compliance with the license***. 

If you have any questions about this, feel free to contact with questions. If you are an end user who purchased a board from a store, contact your distributor for any support inquiries. If you are interested in becoming an authorized distributor for your region, and thus gaining support for your users, please contact me via Discord or Twitter.

The ultimate goal of this project is to eventually document and reproduce all models, but it will take some time. In the meantime, I made the best overall parts (in my opinion) first. If you believe in that goal, consider donating or subscribing on Ko-Fi; labor aside, donor boards to research, prototypes, and parts are all expensive.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W31LT5Y4)

Feel free to come chat with us on Discord: [![demo](https://img.shields.io/discord/1424189475436625921?logo=discord)](https://discord.gg/DjXvPDA6Vv)

All boards in this project are 28-35 years old at the time of writing. All relevant patents worldwide have long expired. This project is not affiliated with or endorsed by the big N.

## Disclaimer

**WARNING:** Doing a full build is an advanced project. Please carefully read the documentation and required skills and experience before purchasing or ordering a board. Purchasing boards and parts does not guarantee that you can be successful in doing a build. Significant experience in soldering and desoldering, along with a variety of tools are necessary. Your first build will likely not work on its first boot. Patience, analysis, and debugging will likely be necessary to bring the unit online. Order at your own risk. The author provides no guarantee of your success, and also cannot guarantee that any given vendor can fabricate these boards correctly. If you are ordering boards, please consult with your target vendor before ordering if you wish to order a board.

If you simply wish to buy a produced board, please consider buying from an authorized distributor from the parts index below. Stock is currently available in the [Japan (inexpensive international shipping available)](https://ko-fi.com/starlightk7/shop), the [US](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) and the [UK](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle). Official sales help fund the development of these boards by donating funds back to this project. As such, boards purchased from an authorized distributor or directly from me will receive limited customer support for assembly issues. Support will be offered in helping you debug a build, check for shorts, broken joints, etc. However, support cannot realistically guarantee you a successful build. In the end, success will depend on your skills, and may fail even with support if you physically damage the boards or parts.

## Usage

Suggested usage for the documents and boards in this repository:
* Studying the hardware and learning abouut it's function
* Aiding repairs and failure diagnostics through the created schematics
* Repairing broken consoles via replacement, reproduction parts
* Building a customized console as a project, for educational purposes.

## Documentation
Please read the [documentation](https://starlightk7.github.io/OpenSFC/) carefully before using the project.

You can also watch 1upRestoration's [install video](https://youtu.be/3N_iRRNhPbA)

## Parts Index

### Motherboards

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| SHVC-CPU-01 (1990) | The original 2-chip motherboard. This board is the best routed motherboard of all two chip models. Early 1/1/1 Units are extremely reliable. Late 2/1/3 units have a high failure rate. | NTSC-U / NTSC-J | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |

### Sound Module

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| TCMK-77XR SHVC-SOUND | The early type, missing resistors on the 2904. Repro for historical purposes only. | NTSC-U / NTSC-J | Planned | N/A | N/A | N/A |
| TCMK-77XR SHVC-SOUND F | This is the late model sound module which fixed missing resistors on the 2904. | NTSC-U / NTSC-J | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |

### Front Panel Board

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| TCMK-81X CCK-N10 | Found in SHVC and GPM Super Famicoms | NTSC-J | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop)| [1upRestorations](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |
| TCMK-81X CCK-N20 | Found in SHVC and GPM North American SNESes | NTSC-U | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |

### Controllers

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| 56V313A (1990.6) | Found in early two chip consoles. 2x shift register model | NTSC-J / NTSC-U | In Progress | N/A | N/A | N/A |
| 56V313D (1995)   | Found in controllers for late models. 1x Obsolete Shift Register | Universal | Prototype Under Testing | N/A | N/A | N/A |
| 56V313A          | L/R Trigger Board | Universal | Prototype Under Testing | N/A | N/A | N/A |

### Cartridges

There are none currently in progress, but they are planned for future.

### Accessories

There are none currently in progress, but they planned for future.

