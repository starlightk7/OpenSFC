# OpenSFC

## Introduction

This repository contains OSHW Reproduction Parts related to the Super Famicom (SFC) / Super NES (SNES) game console under the umbrella name OpenSFC. While these parts are primarily developed from the Japanese Super Famicom models, you can build a North American SNES as well as long as you use the appropriate front and rear panels. See the documentation for details.

These parts are freely available under the terms of the [CERN-OHL-S](https://github.com/starlightk7/OpenSFC/blob/main/LICENSE) license for you to use, study, modify, or sell. The source files are provided as-is with no warranty or entitlement for support to you or any users that you sell manufactured boards to. See [LICENSE](https://github.com/starlightk7/OpenSFC/blob/main/LICENSE) and [NOTICE](https://github.com/starlightk7/OpenSFC/blob/main/NOTICE) for details. Please carefully read these files to understand your obligations if you choose to distribute this project or modifications of it.

## Sample Build

<div><img src="https://starlightk7.github.io/OpenSFC/assets/osfc-intro.jpg" height="400" width="300"/></div>

## Usage

Suggested usage for the documents and boards in this repository:

* Studying the hardware and learning about it's function
* Aiding repairs and failure diagnostics through the created [schematics](https://starlightk7.github.io/OpenSFC/#/schematic) and boardviews
* Repairing broken consoles via replacement, reproduction boards and tested replacement [BOMs](https://starlightk7.github.io/OpenSFC/#/bom).
* Building a customized console as a DIY project, for hobby or educational purposes.

## Documentation

Please read the [documentation](https://starlightk7.github.io/OpenSFC/) carefully before using the project.

You can also watch SHVC install videos from [1upRestorations (English)](https://youtu.be/3N_iRRNhPbA), [Assistência Retrô (Portuguese)](https://www.youtube.com/watch?v=s9iTc--j23Y), or [Fenris Wolf Retro (English)](https://youtu.be/6wmiuE3He4w?si=xQSYrtJ7eRGYEiC7).

You can watch a controller install video from [1upRestorations (English)](https://www.youtube.com/watch?v=qigm2QdvjLU)

## Getting a Board

The project officially distributes boards from [Japan (inexpensive international shipping available)](https://ko-fi.com/starlightk7/shop), the [US](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) and the [UK](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle). If you just wish to simply obtain a board for yourself, it will often be cheaper than ordering from the fab directly.

***Support is offered to those who purchased a board from a vendor listed below. No support is provided for fabricating these files on your own. If you choose that route, you should understand what you are doing and are responsible for ensuring it is done right. I am not responsible for any defects that may arise from improperly manufacturing these files, or for defects arising from modifications made by you or your PCB fab during manufacturing. If you produce these boards for sale without becoming an authorized distributor, you are responsible for any and all customer support related to the product as well as your compliance with the project's license***. 

If you have any questions about this, feel free to contact with questions. If you are interested in becoming an authorized distributor for your region, and thus gaining support for your users, please contact me via Discord or Twitter.

The ultimate goal of this project is to eventually document and reproduce all models, but it will take quite some time. In the meantime, I made the best overall parts (in my opinion) first. If you believe in the long term goal, consider subscribing on Ko-Fi; for the $1 tier you'll also gain access to weekly Dev Logs that teach how boards like these are made. Labor aside, donor boards to research, prototypes, and parts are all expensive, and those funds will help offset those costs to complete more boards.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W31LT5Y4)

Feel free to come chat with us on Discord: [![demo](https://img.shields.io/discord/1424189475436625921?logo=discord)](https://discord.gg/DjXvPDA6Vv)

All boards in this project are 28-35 years old at the time of writing. All relevant patents worldwide have long expired. This project is not affiliated with or endorsed by the big N.

## Commissions

I do not have time to build commissions on a regular basis, however, there are members of the retro community whom offer this service.

| US/Canada | EU |
|-----------|----|
| [1upRestorations (United States)'](https://1uprestorations.com/collections/pre-modded-consoles/products/opensfc-custom-build) | [Modding Marius](https://moddingmarius.com/super-nintendo/)

## Disclaimer

**WARNING:** Doing a full build is an advanced project. Please carefully read the documentation and required skills and experience before purchasing or ordering a board. Purchasing boards and parts does not guarantee that you can be successful in doing a build. Significant experience in soldering and desoldering, along with a variety of tools are necessary. Your first build will likely not work on its first boot. Patience, analysis, and debugging will likely be necessary to bring the unit online. Order at your own risk. The author provides no guarantee of your success, and also cannot guarantee that any given vendor can fabricate these boards correctly. If you are ordering boards, please consult with your target vendor before ordering if you wish to order a board.

## Parts Index

### Motherboards

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| SHVC-CPU-01 (1990) | The original 2-chip motherboard. This board is the best routed motherboard of all two chip models. Early 1/1/1 Units are extremely reliable. Late 2/1/3 units have a high failure rate. | NTSC-U / NTSC-J | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay (Direct)](https://www.ebay.com/itm/136746135648), [Etsy (Direct)](https://starlightretro.etsy.com) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |
| SNS-CPU-GPM-01 (1991) | Contains the often failing CPU 2A. | NTSC-U / NTSC-J | In Progress | N/A | N/A | N/A |

### Sound Module

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| TCMK-77XR SHVC-SOUND | The early type, missing resistors on the 2904. Repro for historical purposes only. | NTSC-U / NTSC-J | Planned | N/A | N/A | N/A |
| TCMK-77XR SHVC-SOUND F | This is the late model sound module which fixed missing resistors on the 2904. | NTSC-U / NTSC-J | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay (Direct)](https://www.ebay.com/itm/136746135648), [Etsy (Direct)](https://starlightretro.etsy.com) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |

### Front Panel Board

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| TCMK-81X CCK-N10 | Found in SHVC and GPM Super Famicoms | NTSC-J | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay (Direct)](https://www.ebay.com/itm/136746135648), [Etsy (Direct)](https://starlightretro.etsy.com)| [1upRestorations](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |
| TCMK-81X CCK-N20 | Found in SHVC and GPM North American SNESes | NTSC-U | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay(Direct)](https://www.ebay.com/itm/136746135648), [Etsy (Direct)](https://starlightretro.etsy.com) | [1upRestorations](https://1uprestorations.com/collections/console-mod-parts/products/opensfc-bundle) | [RetroUpgrades](https://www.retroupgrades.co.uk/product/opensfc-shvc-bundle) |

### Controllers

| Part Number | Description | Region | Status| Japan | United States | United Kingdom |
|-------------|-------------|----------------------|-------|-------|---------------|----------------|
| 56V313A (1990.6) | Found in 1/1/1 SHVC controllers. 2x shift register model | NTSC-J / NTSC-U | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay(Direct)](https://www.ebay.com/itm/137100897247) | [1upRestorations](https://1uprestorations.com/products/opensfc-controllers) | [RetroUpgrades](https://www.retroupgrades.co.uk/) (Coming Soon) |
| 56V313B (1991)   | Found in 2/1/3 SHVC controllers. 1x Obsolete Shift Register, no PAL support | NTSC-J / NTSC-U | Planned | N/A | N/A | N/A |
| 56V313D (1992+)  | Found in controllers for GPM and beyond. 1x Obsolete Shift Register | Universal | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop), [eBay(Direct)](https://www.ebay.com/itm/137100898087) | [1upRestorations](https://1uprestorations.com/products/opensfc-controllers) | [RetroUpgrades](https://www.retroupgrades.co.uk/) (Coming Soon) |
| 56V313A          | L/R Trigger Board | Universal | Released | [Ko-Fi (Direct)](https://ko-fi.com/starlightk7/shop) | [1upRestorations](https://1uprestorations.com/products/opensfc-controllers) | [RetroUpgrades](https://www.retroupgrades.co.uk/) (Coming Soon) |

### Cartridges

There are none currently in progress, but they are planned for future.

### Accessories

There are none currently in progress, but they planned for future.

