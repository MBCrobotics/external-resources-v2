/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addBlocks(Blockly) {
    //Setup=========================================================
    {
        const e2botSetupColor1 = '#4C97FF';
        const e2botSetupColor2 = '#264BFF';

        Blockly.Blocks.e2botSetup = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SETUP,
                    message1: '%1',
                    message2: Blockly.Msg.E2BOT_LOOP,
                    message3: '%1',
                    message4: '%1', // Icon
                    lastDummyAlign4: 'RIGHT',
                    args1: [{
                        type: 'input_statement',
                        name: 'substack'
                    }],
                    args3: [{
                        type: 'input_statement',
                        name: 'substack1'
                    }],
                    args4: [
                        {
                            type: 'field_image',
                            //src: repeatIconUrl,
                            src: Blockly.mainWorkspace.options.pathToMedia + "repeat.svg",
                            width: 24,
                            height: 24,
                            alt: '*',
                            flip_rtl: true
                        }
                    ],
                    colour: e2botSetupColor1,
                    secondaryColour: e2botSetupColor2,
                    extensions: ['shape_hat']
                });
                this.setNextStatement(false, null);
            }
        };
    };
    //MotorControl=========================================================
    {
        const e2botMotorControlColor1 = '#8BCC33';
        const e2botMotorControlColor2 = '#456619';

        Blockly.Blocks.e2botSetMotorRunFree = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_MOTOR_RUN_FREE,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'leftMotorPower'
                        },
                        {
                            type: 'input_value',
                            name: 'rightMotorPower'
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetMotorRunForward = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_MOTOR_RUN_FORWARD,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'motorPower'
                        },
                        {
                            type: 'input_value',
                            name: 'forwardCm'
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetMotorRunTurn = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_MOTOR_RUN_TURN,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'leftMotorPower'
                        },
                        {
                            type: 'input_value',
                            name: 'rightMotorPower'
                        },
                        {
                            type: 'input_value',
                            name: 'turnTheta'
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetMotorRunTime = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_MOTOR_RUN_TIME,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'leftMotorPower'
                        },
                        {
                            type: 'input_value',
                            name: 'rightMotorPower'
                        },
                        {
                            type: 'input_value',
                            name: 'runTime'
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetMotorRunStop = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_MOTOR_RUN_STOP,
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetMotorSync = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_MOTOR_SYNC,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'syncOption',
                            options: [
                                [Blockly.Msg.E2BOT_SET_MOTOR_SYNC_OFF, '0'],
                                [Blockly.Msg.E2BOT_SET_MOTOR_SYNC_ON, '1']]
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botResetEncoderCm = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_RESET_ENCODER_CM,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'resetEncoderCmOption',
                            options: [
                                [Blockly.Msg.E2BOT_RESET_ENCODER_CM_AVG, '2'],
                                [Blockly.Msg.E2BOT_RESET_ENCODER_CM_LEFT, '0'],
                                [Blockly.Msg.E2BOT_RESET_ENCODER_CM_RIGHT, '1'],
                                [Blockly.Msg.E2BOT_RESET_ENCODER_CM_ALL, '3']
                            ]
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botGetEncoderCm = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_ENCODER_CM,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'getEncoderCmOption',
                            options: [
                                [Blockly.Msg.E2BOT_GET_ENCODER_CM_AVG, '2'],
                                [Blockly.Msg.E2BOT_GET_ENCODER_CM_LEFT, '0'],
                                [Blockly.Msg.E2BOT_GET_ENCODER_CM_RIGHT, '1']
                            ]
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botResetEncoder = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_RESET_ENCODER,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'resetEncoderOption',
                            options: [
                                [Blockly.Msg.E2BOT_RESET_ENCODER_AVG, '2'],
                                [Blockly.Msg.E2BOT_RESET_ENCODER_LEFT, '0'],
                                [Blockly.Msg.E2BOT_RESET_ENCODER_RIGHT, '1'],
                                [Blockly.Msg.E2BOT_RESET_ENCODER_ALL, '3']
                            ]
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botGetEncoder = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_ENCODER,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'getEncoderOption',
                            options: [
                                [Blockly.Msg.E2BOT_GET_ENCODER_AVG, '2'],
                                [Blockly.Msg.E2BOT_GET_ENCODER_LEFT, '0'],
                                [Blockly.Msg.E2BOT_GET_ENCODER_RIGHT, '1']
                            ]
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetSpeed = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_SPEED,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'getSpeedOption',
                            options: [
                                [Blockly.Msg.E2BOT_GET_SPEED_AVG, '2'],
                                [Blockly.Msg.E2BOT_GET_SPEED_LEFT, '0'],
                                [Blockly.Msg.E2BOT_GET_SPEED_RIGHT, '1']
                            ]
                        }
                    ],
                    colour: e2botMotorControlColor1,
                    secondaryColour: e2botMotorControlColor2,
                    extensions: ['output_number']
                });
            }
        };
    };
    //Output===============================================================
    {
        const e2botOutputColor1 = '#8BCC33';
        const e2botOutputColor2 = '#456619';

        Blockly.Blocks.e2botSetBuzzer = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_BUZZER,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'setBuzzerOptions',
                            options: [
                                [Blockly.Msg.E2BOT_SET_BUZZER_B0, '31'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_C1, '33'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_D1, '37'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_E1, '41'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_F1, '44'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_G1, '49'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_A1, '55'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_B1, '62'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_C2, '65'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_D2, '73'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_E2, '82'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_F2, '87'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_G2, '98'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_A2, '110'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_B2, '123'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_C3, '131'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_D3, '147'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_E3, '165'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_F3, '175'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_G3, '196'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_A3, '220'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_B3, '247'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_C4, '262'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_D4, '294'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_E4, '330'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_F4, '349'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_G4, '392'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_A4, '440'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_B4, '494'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_C5, '523'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_D5, '587'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_E5, '659'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_F5, '698'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_G5, '784'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_A5, '880'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_B5, '988'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_C6, '1047'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_D6, '1175'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_E6, '1319'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_F6, '1397'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_G6, '1568'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_A6, '1760'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_B6, '1976'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_C7, '2093'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_D7, '2349'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_E7, '2637'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_F7, '2794'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_G7, '3136'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_A7, '3520'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_B7, '3951'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_C8, '4186'],
                                [Blockly.Msg.E2BOT_SET_BUZZER_D8, '4699']
                            ]
                        },
                        {
                            type: 'input_value',
                            name: 'buzzerSec'
                        }
                    ],
                    colour: e2botOutputColor1,
                    secondaryColour: e2botOutputColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetRgbLed = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_RGB_LED,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'e2botSetRgbLedRed',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetRgbLedGreen',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetRgbLedBlue',
                        }
                    ],
                    colour: e2botOutputColor1,
                    secondaryColour: e2botOutputColor2,
                    extensions: ['shape_statement']
                });
            }
        };
    };
    //LcdOutput===============================================================
    {
        const e2botLcdColor1 = '#8BCC33';
        const e2botLcdColor2 = '#456619';

        Blockly.Blocks.e2botSetLcdShowColorOption = {
            /**
             * Options for StrColorOption
             * @this Blockly.Block
             */
            init: function () {
                this.jsonInit({
                    "message0": "%1",
                    "args0": [
                        {
                            "type": "field_dropdown",
                            "name": "e2botSetLcdShowColor",
                            options: [
                                [Blockly.Msg.E2BOT_SET_LCD_SHOW_WHITE, '0xFFFF'],
                                [Blockly.Msg.E2BOT_SET_LCD_SHOW_RED, '0xF800'],
                                [Blockly.Msg.E2BOT_SET_LCD_SHOW_YELLOW, '0xFFE0'],
                                [Blockly.Msg.E2BOT_SET_LCD_SHOW_GREEN, '0x07E0'],
                                [Blockly.Msg.E2BOT_SET_LCD_SHOW_INDIGO, '0x07FF'],
                                [Blockly.Msg.E2BOT_SET_LCD_SHOW_BLUE, '0x001F'],
                                [Blockly.Msg.E2BOT_SET_LCD_SHOW_PURPLE, '0xF81F'],
                                [Blockly.Msg.E2BOT_SET_LCD_SHOW_BLACK, '0x0000']
                            ]
                        }
                    ],
                    colour: e2botLcdColor1,
                    secondaryColour: e2botLcdColor2,
                    "extensions": ["output_string"]
                });
            }
        };

        Blockly.Blocks.e2botSetLcdShowStr = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_LCD_SHOW_STR,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdShowStrInput',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdShowStrX',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdShowStrY',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdShowColor',
                        }
                    ],
                    colour: e2botLcdColor1,
                    secondaryColour: e2botLcdColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetLcdShowNum = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_LCD_SHOW_NUM,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdShowNumInput',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdShowNumX',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdShowNumY',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdShowColor',
                        }
                    ],
                    colour: e2botLcdColor1,
                    secondaryColour: e2botLcdColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetLcdPixel = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_LCD_PIXEL,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdPixelX',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdPixelY',
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetLcdShowColor',
                        }
                    ],
                    colour: e2botLcdColor1,
                    secondaryColour: e2botLcdColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetLcdClear = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_LCD_CLEAR,
                    args0: [
                    ],
                    colour: e2botLcdColor1,
                    secondaryColour: e2botLcdColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetColorPalette = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_COLOR_PALETTE,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'e2botSetColorPaletteRed'
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetColorPaletteGreen'
                        },
                        {
                            type: 'input_value',
                            name: 'e2botSetColorPaletteBlue'
                        }
                    ],
                    colour: e2botLcdColor1,
                    secondaryColour: e2botLcdColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botSensorTestMode = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SENSOR_TEST_MODE,
                    args0: [
                    ],
                    colour: e2botLcdColor1,
                    secondaryColour: e2botLcdColor2,
                    extensions: ['shape_statement']
                });
            }
        };

    };
    //LineSensor===============================================================
    {
        const e2botLineSensorColor1 = '#CACA00';
        const e2botLineSensorColor2 = '#656500';

        Blockly.Blocks.e2botSetIROnOff = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_IR_ONOFF,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'setIROnOffOption',
                            options: [
                                [Blockly.Msg.E2BOT_SET_IR_ON, '1'],
                                [Blockly.Msg.E2BOT_SET_IR_OFF, '0']
                            ]
                        }
                    ],
                    colour: e2botLineSensorColor1,
                    secondaryColour: e2botLineSensorColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetSearchLine = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_SEARCH_LINE,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'LineBlackWhiteOption',
                            options: [
                                [Blockly.Msg.E2BOT_SET_SEARCH_LINE_WHITE, '1'],
                                [Blockly.Msg.E2BOT_SET_SEARCH_LINE_BLACK, '0']
                            ]
                        }
                    ],
                    colour: e2botLineSensorColor1,
                    secondaryColour: e2botLineSensorColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botGetLinePosIR = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_LINE_POS_IR,
                    args0: [
                    ],
                    colour: e2botLineSensorColor1,
                    secondaryColour: e2botLineSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetLineWidthIR = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_LINE_WIDTH_IR,
                    args0: [
                    ],
                    colour: e2botLineSensorColor1,
                    secondaryColour: e2botLineSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetCalibIR = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_CALIB_IR,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'irNum'
                        },
                    ],
                    colour: e2botLineSensorColor1,
                    secondaryColour: e2botLineSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetAnalogIR = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_ANALOG_IR,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'irNum'
                        },
                    ],
                    colour: e2botLineSensorColor1,
                    secondaryColour: e2botLineSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetBoolIR = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_BOOL_IR,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'irNum'
                        },
                    ],
                    colour: e2botLineSensorColor1,
                    secondaryColour: e2botLineSensorColor2,
                    extensions: ['output_boolean']
                });
            }
        };

        Blockly.Blocks.e2botGetByteIR = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_BYTE_IR,
                    args0: [
                    ],
                    colour: e2botLineSensorColor1,
                    secondaryColour: e2botLineSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botSetLineColorRecoder = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_LINE_COLOR_RECODER,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'ColorBlackWhiteOption',
                            options: [
                                [Blockly.Msg.E2BOT_SET_LINE_COLOR_RECODER_WHITE, '0'],
                                [Blockly.Msg.E2BOT_SET_LINE_COLOR_RECODER_BLACK, '1']
                            ]
                        }
                    ],
                    colour: e2botLineSensorColor1,
                    secondaryColour: e2botLineSensorColor2,
                    extensions: ['shape_statement']
                });
            }
        };
    };
    //GyroSensor===============================================================
    {
        const e2botGyroSensorColor1 = '#CACA00';
        const e2botGyroSensorColor2 = '#656500';

        Blockly.Blocks.e2botMpuUpdataOnOff = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_MPU_UPDATA_ONOFF,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'setUpdataOnOffOption',
                            options: [
                                [Blockly.Msg.E2BOT_MPU_UPDATA_ON, '1'],
                                [Blockly.Msg.E2BOT_MPU_UPDATA_OFF, '0']
                            ]
                        }
                    ],
                    colour: e2botGyroSensorColor1,
                    secondaryColour: e2botGyroSensorColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botGetAngXYZ = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_ANG_XYZ,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'getAngXyzOption',
                            options: [
                                [Blockly.Msg.E2BOT_GET_ANG_XYZ_Z, '2'],
                                [Blockly.Msg.E2BOT_GET_ANG_XYZ_Y, '1'],
                                [Blockly.Msg.E2BOT_GET_ANG_XYZ_X, '0']
                            ]
                        }
                    ],
                    colour: e2botGyroSensorColor1,
                    secondaryColour: e2botGyroSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetVelXYZ = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_VEL_XYZ,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'getVelXyzOption',
                            options: [
                                [Blockly.Msg.E2BOT_GET_VEL_XYZ_Z, '2'],
                                [Blockly.Msg.E2BOT_GET_VEL_XYZ_Y, '1'],
                                [Blockly.Msg.E2BOT_GET_VEL_XYZ_X, '0']
                            ]
                        }
                    ],
                    colour: e2botGyroSensorColor1,
                    secondaryColour: e2botGyroSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botResetMPU = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_RESET_MPU,
                    colour: e2botGyroSensorColor1,
                    secondaryColour: e2botGyroSensorColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botCalibrateMPU = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_CALIBRATE_MPU,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'calibTime'
                        }
                    ],
                    colour: e2botGyroSensorColor1,
                    secondaryColour: e2botGyroSensorColor2,
                    extensions: ['shape_statement']
                });
            }
        };
    };
    //ColorSensor===============================================================
    {
        const e2botColorSensorColor1 = '#CACA00';
        const e2botColorSensorColor2 = '#656500';

        Blockly.Blocks.e2botSetCSLOnOff = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_CSL_ONOFF,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'SetCSLOnOffOption',
                            options: [
                                [Blockly.Msg.E2BOT_SET_CSL_ON, '1'],
                                [Blockly.Msg.E2BOT_SET_CSL_OFF, '0']
                            ]
                        }
                    ],
                    colour: e2botColorSensorColor1,
                    secondaryColour: e2botColorSensorColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botCompareColorHue = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_COMPARE_COLOR_HUE,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'colorHueOption',
                            options: [
                                [Blockly.Msg.E2BOT_COMPARE_COLOR_HUE_RED, '1'],
                                [Blockly.Msg.E2BOT_COMPARE_COLOR_HUE_YELLOW, '2'],
                                [Blockly.Msg.E2BOT_COMPARE_COLOR_HUE_GREEN, '3'],
                                [Blockly.Msg.E2BOT_COMPARE_COLOR_HUE_INDIGO, '4'],
                                [Blockly.Msg.E2BOT_COMPARE_COLOR_HUE_BLUE, '5'],
                                [Blockly.Msg.E2BOT_COMPARE_COLOR_HUE_PURPLE, '6']
                            ]
                        },
                    ],
                    colour: e2botColorSensorColor1,
                    secondaryColour: e2botColorSensorColor2,
                    extensions: ['output_boolean']
                });
            }
        };

        Blockly.Blocks.e2botGetColorHue = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_COLOR_HUE,
                    args0: [
                    ],
                    colour: e2botColorSensorColor1,
                    secondaryColour: e2botColorSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetColorCaliRgb = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_COLOR_CALI_RGB,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'GetColorCaliRgbOption',
                            options: [
                                [Blockly.Msg.E2BOT_GET_COLOR_CALI_RGB_RED, '0'],
                                [Blockly.Msg.E2BOT_GET_COLOR_CALI_RGB_GREEN, '1'],
                                [Blockly.Msg.E2BOT_GET_COLOR_CALI_RGB_BLUE, '2']
                            ]
                        }
                    ],
                    colour: e2botColorSensorColor1,
                    secondaryColour: e2botColorSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetColorRgb = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_COLOR_RGB,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'GetColorRgbOption',
                            options: [
                                [Blockly.Msg.E2BOT_GET_COLOR_RGB_RED, '0'],
                                [Blockly.Msg.E2BOT_GET_COLOR_RGB_GREEN, '1'],
                                [Blockly.Msg.E2BOT_GET_COLOR_RGB_BLUE, '2']
                            ]
                        }
                    ],
                    colour: e2botColorSensorColor1,
                    secondaryColour: e2botColorSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

    };
    //ValueSensor===========================================================
    {
        const e2botValueSensorColor1 = '#CACA00';
        const e2botValueSensorColor2 = '#656500';

        Blockly.Blocks.e2botGetUltrasonic = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_ULTRASONIC,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'GetUltrasonicOption',
                            options: [
                                [Blockly.Msg.E2BOT_GET_ULTRASONIC_CM, '0'],
                                [Blockly.Msg.E2BOT_GET_ULTRASONIC_MM, '1']
                            ]
                        }
                    ],
                    colour: e2botValueSensorColor1,
                    secondaryColour: e2botValueSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetLightSensor = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_LIGHT_SENSOR,
                    args0: [
                    ],
                    colour: e2botValueSensorColor1,
                    secondaryColour: e2botValueSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetKnobSensor = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_KNOB_SENSOR,
                    args0: [
                    ],
                    colour: e2botValueSensorColor1,
                    secondaryColour: e2botValueSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetVoltSensor = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_VOLT_SENSOR,
                    args0: [
                    ],
                    colour: e2botValueSensorColor1,
                    secondaryColour: e2botValueSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetIrRec = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_IR_REC,
                    args0: [
                    ],
                    colour: e2botValueSensorColor1,
                    secondaryColour: e2botValueSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

    };
    //BoolSensor===========================================================
    {
        const e2botBoolSensorColor1 = '#CACA00';
        const e2botBoolSensorColor2 = '#656500';

        Blockly.Blocks.e2botCompareLimitSensorBumped = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_COMPARE_LIMIT_SENSOR_BUMPED,
                    colour: e2botBoolSensorColor1,
                    secondaryColour: e2botBoolSensorColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botCompareLimitSensor = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_COMPARE_LIMIT_SENSOR,
                    colour: e2botBoolSensorColor1,
                    secondaryColour: e2botBoolSensorColor2,
                    extensions: ['output_boolean']
                });
            }
        };

        Blockly.Blocks.e2botCompareTouchSensor = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_COMPARE_TOUCH_SENSOR,
                    colour: e2botBoolSensorColor1,
                    secondaryColour: e2botBoolSensorColor2,
                    extensions: ['output_boolean']
                });
            }
        };

        Blockly.Blocks.e2botCompareLR = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_COMPARE_LR,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'compareLrOption',
                            options: [
                                [Blockly.Msg.E2BOT_COMPARE_LR_L, '0'],
                                [Blockly.Msg.E2BOT_COMPARE_LR_R, '1'],
                            ]
                        },
                    ],
                    colour: e2botBoolSensorColor1,
                    secondaryColour: e2botBoolSensorColor2,
                    extensions: ['output_boolean']
                });
            }
        };

        Blockly.Blocks.e2botCompareHallSensor = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_COMPARE_HALL_SENSOR,
                    colour: e2botBoolSensorColor1,
                    secondaryColour: e2botBoolSensorColor2,
                    extensions: ['output_boolean']
                });
            }
        };

        Blockly.Blocks.e2botCompareHumanSensor = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_COMPARE_HUMAN_SENSOR,
                    colour: e2botBoolSensorColor1,
                    secondaryColour: e2botBoolSensorColor2,
                    extensions: ['output_boolean']
                });
            }
        };



    };
    //TimerSensor===========================================================
    {
        const e2botTimerSensorColor1 = '#CACA00';
        const e2botTimerSensorColor2 = '#656500';


        Blockly.Blocks.e2botResetTimer = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_RESET_TIMER,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'resetTimerOption',
                            options: [
                                [Blockly.Msg.E2BOT_RESET_TIMER_1, '0'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_2, '1'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_3, '2'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_4, '3'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_5, '4'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_6, '5'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_7, '6'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_8, '7'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_9, '8'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_10, '9'],
                                [Blockly.Msg.E2BOT_RESET_TIMER_ALL, '10']
                            ]
                        }
                    ],
                    colour: e2botTimerSensorColor1,
                    secondaryColour: e2botTimerSensorColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botGetTimer = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_TIMER,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'getTimerOption',
                            options: [
                                [Blockly.Msg.E2BOT_GET_TIMER_1, '0'],
                                [Blockly.Msg.E2BOT_GET_TIMER_2, '1'],
                                [Blockly.Msg.E2BOT_GET_TIMER_3, '2'],
                                [Blockly.Msg.E2BOT_GET_TIMER_4, '3'],
                                [Blockly.Msg.E2BOT_GET_TIMER_5, '4'],
                                [Blockly.Msg.E2BOT_GET_TIMER_6, '5'],
                                [Blockly.Msg.E2BOT_GET_TIMER_7, '6'],
                                [Blockly.Msg.E2BOT_GET_TIMER_8, '7'],
                                [Blockly.Msg.E2BOT_GET_TIMER_9, '8'],
                                [Blockly.Msg.E2BOT_GET_TIMER_10, '9'],
                            ]
                        }
                    ],
                    colour: e2botTimerSensorColor1,
                    secondaryColour: e2botTimerSensorColor2,
                    extensions: ['output_number']
                });
            }
        };

    };
    //Array================================================================
    {
        const e2botArrayColor1 = '#D50000';
        const e2botArrayColor2 = '#6A0000';

        Blockly.Blocks.e2botArraySetup = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_ARRAY_SETUP,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'arrayName'
                        },
                        {
                            type: 'input_value',
                            name: 'arraySize'
                        }
                    ],
                    colour: e2botArrayColor1,
                    secondaryColour: e2botArrayColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botArrayWrite = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_ARRAY_WRITE,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'arrayData'
                        },
                        {
                            type: 'input_value',
                            name: 'arrayName'
                        },
                        {
                            type: 'input_value',
                            name: 'arrayIndex'
                        }
                    ],
                    colour: e2botArrayColor1,
                    secondaryColour: e2botArrayColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botArrayRead = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_ARRAY_READ,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'arrayName'
                        },
                        {
                            type: 'input_value',
                            name: 'arrayIndex'
                        }
                    ],
                    colour: e2botArrayColor1,
                    secondaryColour: e2botArrayColor2,
                    extensions: ['output_number']
                });
            }
        };
    };
    //MathTools================================================================
    {
        const e2botMathToolsColor1 = '#D50000';
        const e2botMathToolsColor2 = '#6A0000';

        Blockly.Blocks.e2botGetMax = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_MAX,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'value1'
                        },
                        {
                            type: 'input_value',
                            name: 'value2'
                        }
                    ],
                    colour: e2botMathToolsColor1,
                    secondaryColour: e2botMathToolsColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetMin = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_MIN,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'value1'
                        },
                        {
                            type: 'input_value',
                            name: 'value2'
                        }
                    ],
                    colour: e2botMathToolsColor1,
                    secondaryColour: e2botMathToolsColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetMap = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_MAP,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'input'
                        },
                        {
                            type: 'input_value',
                            name: 'x1'
                        },
                        {
                            type: 'input_value',
                            name: 'x2'
                        },
                        {
                            type: 'input_value',
                            name: 'y1'
                        },
                        {
                            type: 'input_value',
                            name: 'y2'
                        }
                    ],
                    colour: e2botMathToolsColor1,
                    secondaryColour: e2botMathToolsColor2,
                    extensions: ['output_number']
                });
            }
        };

        Blockly.Blocks.e2botGetConstrain = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_GET_CONSTRAIN,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'input'
                        },
                        {
                            type: 'input_value',
                            name: 'x1'
                        },
                        {
                            type: 'input_value',
                            name: 'x2'
                        }
                    ],
                    colour: e2botMathToolsColor1,
                    secondaryColour: e2botMathToolsColor2,
                    extensions: ['output_number']
                });
            }
        };

    };
    //Expansion================================================================
    {
        const e2botExpansionColor1 = '#0049EE';
        const e2botExpansionColor2 = '#0024F7';

        Blockly.Blocks.e2botSetServo = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_SERVO,
                    args0: [
                        {
                            type: 'field_dropdown',
                            name: 'setServoOption',
                            options: [
                                [Blockly.Msg.E2BOT_SET_SERVO_A0, '14'],
                                [Blockly.Msg.E2BOT_SET_SERVO_D2, '2']
                            ]
                        },
                        {
                            type: 'input_value',
                            name: 'servoDegree'
                        }
                    ],
                    colour: e2botExpansionColor1,
                    secondaryColour: e2botExpansionColor2,
                    extensions: ['shape_statement']
                });
            }
        };

        Blockly.Blocks.e2botSetMotorExt = {
            init: function () {
                this.jsonInit({
                    message0: Blockly.Msg.E2BOT_SET_MOTOR_EXT,
                    args0: [
                        {
                            type: 'input_value',
                            name: 'extMotorPower'
                        }
                    ],
                    colour: e2botExpansionColor1,
                    secondaryColour: e2botExpansionColor2,
                    extensions: ['shape_statement']
                });
            }
        };

    };


    return Blockly;
}
exports = addBlocks;
