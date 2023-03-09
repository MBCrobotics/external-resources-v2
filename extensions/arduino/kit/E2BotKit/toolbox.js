/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addToolbox() {
    return `
    
<category name="%{BKY_E2BOT_EVENT_CATEGORY}" id="E2BOT_EVENT_CATEGORY" colour="#4C97FF" secondaryColour="#264BFF" >
    <block type="e2botSetup" id="e2botSetup">
    </block>
    
</category>

<category name="%{BKY_E2BOT_MOTOR_CATEGORY}" id="E2BOT_MOTOR_CATEGORY" colour="#8BCC33" secondaryColour="#456619" >
    <block type="e2botSetMotorRunFree" id="e2botSetMotorRunFree">
        <value name="leftMotorPower">
            <shadow type="math_sign100_number">
                <field name="NUM">75</field>
            </shadow>
        </value>
        <value name="rightMotorPower">
            <shadow type="math_sign100_number">
                <field name="NUM">75</field>
            </shadow>
        </value>
    </block>

    <block type="e2botSetMotorRunForward" id="e2botSetMotorRunForward">
        <value name="motorPower">
            <shadow type="math_sign100_number">
                <field name="NUM">75</field>
            </shadow>
        </value>
        <value name="forwardCm">
            <shadow type="math_positive_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>

    <block type="e2botSetMotorRunTurn" id="e2botSetMotorRunTurn">
        <value name="leftMotorPower">
            <shadow type="math_sign100_number">
                <field name="NUM">75</field>
            </shadow>
        </value>
        <value name="rightMotorPower">
            <shadow type="math_sign100_number">
                <field name="NUM">-75</field>
            </shadow>
        </value>
        <value name="turnTheta">
            <shadow type="math_positive_number">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>

    <block type="e2botSetMotorRunTime" id="e2botSetMotorRunTime">
        <value name="leftMotorPower">
            <shadow type="math_sign100_number">
                <field name="NUM">75</field>
            </shadow>
        </value>
        <value name="rightMotorPower">
            <shadow type="math_sign100_number">
                <field name="NUM">75</field>
            </shadow>
        </value>
        <value name="runTime">
            <shadow type="math_positive_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
    </block>

    <block type="e2botSetMotorRunStop" id="e2botSetMotorRunStop">
    </block>

    <block type="e2botSetMotorSync" id="e2botSetMotorSync">
    </block>

    <block type="e2botResetEncoderCm" id="e2botResetEncoderCm">
    </block>

    <block type="e2botGetEncoderCm" id="e2botGetEncoderCm">
    </block>

    <block type="e2botResetEncoder" id="e2botResetEncoder">
    </block>

    <block type="e2botGetEncoder" id="e2botGetEncoder">
    </block>

    <block type="e2botGetSpeed" id="e2botGetSpeed">
    </block>
    
</category>

<category name="%{BKY_E2BOT_OUTPUT_CATEGORY}" id="E2BOT_OUTPUT_CATEGORY" colour="#8BCC33" secondaryColour="#456619" >
    <block type="e2botSetBuzzer" id="e2botSetBuzzer">
        <value name="buzzerSec">
            <shadow type="math_positive_number">
                <field name="NUM">0.1</field>
            </shadow>
        </value>
    </block>
    <block type="e2botSetRgbLed" id="e2botSetRgbLed">
        <value name="e2botSetRgbLedRed">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="e2botSetRgbLedGreen">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="e2botSetRgbLedBlue">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>
</category>

<category name="%{BKY_E2BOT_LCD_CATEGORY}" id="E2BOT_LCD_CATEGORY" colour="#8BCC33" secondaryColour="#456619" >
    <block type="e2botSetLcdShowStr" id="e2botSetLcdShowStr">
        <value name="e2botSetLcdShowStrInput">
            <shadow type="text">
                <field name="TEXT">Hellow E2Bot</field>
            </shadow>
        </value>
        <value name="e2botSetLcdShowStrX">
            <shadow type="math_lcdx160_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="e2botSetLcdShowStrY">
            <shadow type="math_lcdy120_number">
                <field name="NUM">60</field>
            </shadow>
        </value>
        <value name="e2botSetLcdShowColor">
            <shadow type="e2botSetLcdShowColorOption">
            </shadow>
        </value>
    </block>

    <block type="e2botSetLcdShowNum" id="e2botSetLcdShowNum">
        <value name="e2botSetLcdShowNumInput">
            <shadow type="math_number">
                <field name="NUM">123</field>
            </shadow>
        </value>
        <value name="e2botSetLcdShowNumX">
            <shadow type="math_lcdx160_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="e2botSetLcdShowNumY">
            <shadow type="math_lcdy120_number">
                <field name="NUM">60</field>
            </shadow>
        </value>
        <value name="e2botSetLcdShowColor">
            <shadow type="e2botSetLcdShowColorOption">
            </shadow>
        </value>
    </block>

    <block type="e2botSetLcdPixel" id="e2botSetLcdPixel">
        <value name="e2botSetLcdPixelX">
            <shadow type="math_lcdx160_number">
                <field name="NUM">80</field>
            </shadow>
        </value>
        <value name="e2botSetLcdPixelY">
            <shadow type="math_lcdy120_number">
                <field name="NUM">60</field>
            </shadow>
        </value>
        <value name="e2botSetLcdShowColor">
            <shadow type="e2botSetLcdShowColorOption">
            </shadow>
        </value>
    </block>

    <block type="e2botSetLcdClear" id="e2botSetLcdClear">
    </block>

    <block type="e2botSetColorPalette" id="e2botSetColorPalette">
        <value name="e2botSetColorPaletteRed">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="e2botSetColorPaletteGreen">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
        <value name="e2botSetColorPaletteBlue">
            <shadow type="math_uint8_number">
                <field name="NUM">255</field>
            </shadow>
        </value>
    </block>

    <block type="e2botSensorTestMode" id="e2botSensorTestMode">
    </block>

</category>

<category name="%{BKY_E2BOT_LINESENSOR_CATEGORY}" id="E2BOT_LINESENSOR_CATEGORY" colour="#CACA00" secondaryColour="#656500" >
    
    <block type="e2botSetIROnOff" id="e2botSetIROnOff">
    </block>

    <block type="e2botSetSearchLine" id="e2botSetSearchLine">
    </block>

    <block type="e2botGetLinePosIR" id="e2botGetLinePosIR">
    </block>

    <block type="e2botGetLineWidthIR" id="e2botGetLineWidthIR">
    </block>

    <block type="e2botGetCalibIR" id="e2botGetCalibIR">
        <value name="irNum">
            <shadow type="math_ir1to6_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <block type="e2botGetAnalogIR" id="e2botGetAnalogIR">
        <value name="irNum">
            <shadow type="math_ir1to6_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <block type="e2botGetBoolIR" id="e2botGetBoolIR">
        <value name="irNum">
            <shadow type="math_ir1to6_number">
                <field name="NUM">1</field>
            </shadow>
        </value>
    </block>

    <block type="e2botGetByteIR" id="e2botGetByteIR">
    </block>

    <block type="e2botSetLineColorRecoder" id="e2botSetLineColorRecoder">
    </block>
    
</category>

<category name="%{BKY_E2BOT_GYROSENSOR_CATEGORY}" id="E2BOT_GYROSENSOR_CATEGORY" colour="#CACA00" secondaryColour="#656500" >
    
    <block type="e2botMpuUpdataOnOff" id="e2botMpuUpdataOnOff">
    </block>

    <block type="e2botGetAngXYZ" id="e2botGetAngXYZ">
    </block>

    <block type="e2botResetMPU" id="e2botResetMPU">
    </block>

    <block type="e2botCalibrateMPU" id="e2botCalibrateMPU">
        <value name="calibTime">
            <shadow type="math_positive_number">
                <field name="NUM">3</field>
            </shadow>
        </value>
    </block>

</category>

<category name="%{BKY_E2BOT_COLORSENSOR_CATEGORY}" id="E2BOT_COLORSENSOR_CATEGORY" colour="#CACA00" secondaryColour="#656500" >
 
    <block type="e2botSetCSLOnOff" id="e2botSetCSLOnOff">
    </block>

    <block type="e2botCompareColorHue" id="e2botCompareColorHue">
    </block>

    <block type="e2botGetColorHue" id="e2botGetColorHue">
    </block>

    <block type="e2botGetColorCaliRgb" id="e2botGetColorCaliRgb">
    </block>

    <block type="e2botGetColorRgb" id="e2botGetColorRgb">
    </block>

</category>

<category name="%{BKY_E2BOT_VALUESENSOR_CATEGORY}" id="E2BOT_VALUESENSOR_CATEGORY" colour="#CACA00" secondaryColour="#656500" >
 
    <block type="e2botGetUltrasonic" id="e2botGetUltrasonic">
    </block>
    
    <block type="e2botGetLightSensor" id="e2botGetLightSensor">
    </block>
    
    <block type="e2botGetKnobSensor" id="e2botGetKnobSensor">
    </block>
    
    <block type="e2botGetVoltSensor" id="e2botGetVoltSensor">
    </block>
    
    <block type="e2botGetIrRec" id="e2botGetIrRec">
    </block>

</category>

<category name="%{BKY_E2BOT_BOOLSENSOR_CATEGORY}" id="E2BOT_BOOLSENSOR_CATEGORY" colour="#CACA00" secondaryColour="#656500" >

    <block type="e2botCompareLimitSensorBumped" id="e2botCompareLimitSensorBumped">
    </block>

    <block type="e2botCompareLimitSensor" id="e2botCompareLimitSensor">
    </block>

    <block type="e2botCompareTouchSensor" id="e2botCompareTouchSensor">
    </block>

    <block type="e2botCompareLR" id="e2botCompareLR">
    </block>

    <block type="e2botCompareHallSensor" id="e2botCompareHallSensor">
    </block>

    <block type="e2botCompareHumanSensor" id="e2botCompareHumanSensor">
    </block>

</category>

<category name="%{BKY_E2BOT_TIMER_CATEGORY}" id="E2BOT_TIMER_CATEGORY" colour="#CACA00" secondaryColour="#656500" >

    <block type="e2botResetTimer" id="e2botResetTimer">
    </block>

    <block type="e2botGetTimer" id="e2botGetTimer">
    </block>

</category>

<category name="%{BKY_E2BOT_ARRAY_CATEGORY}" id="E2BOT_ARRAY_CATEGORY" colour="#D50000" secondaryColour="#6A0000" >

    <block type="e2botArraySetup" id="e2botArraySetup">
        <value name="arrayName">
            <shadow type="text">
                <field name="TEXT">A</field>
            </shadow>
        </value>
        <value name="arraySize">
            <shadow type="math_uint8_number">
                <field name="NUM">10</field>
            </shadow>
        </value>
    </block>

    <block type="e2botArrayWrite" id="e2botArrayWrite">
        <value name="arrayData">
            <shadow type="math_number">
                <field name="NUM">123</field>
            </shadow>
        </value>
        <value name="arrayName">
            <shadow type="text">
                <field name="TEXT">A</field>
            </shadow>
        </value>
        <value name="arrayIndex">
            <shadow type="math_uint8_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

    <block type="e2botArrayRead" id="e2botArrayRead">
        <value name="arrayName">
            <shadow type="text">
                <field name="TEXT">A</field>
            </shadow>
        </value>
        <value name="arrayIndex">
            <shadow type="math_uint8_number">
                <field name="NUM">0</field>
            </shadow>
        </value>
    </block>

</category>
<category name="%{BKY_E2BOT_MATHTOOLS_CATEGORY}" id="E2BOT_MATHTOOLS_CATEGORY" colour="#D50000" secondaryColour="#6A0000" >

<block type="e2botGetMax" id="e2botGetMax">
    <value name="value1">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="value2">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>

<block type="e2botGetMin" id="e2botGetMin">
    <value name="value1">
        <shadow type="math_number">
            <field name="NUM">-1</field>
        </shadow>
    </value>
    <value name="value2">
        <shadow type="math_number">
            <field name="NUM">0</field>
        </shadow>
    </value>
</block>

<block type="e2botGetMap" id="e2botGetMap">
    <value name="input">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="x1">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="x2">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
    <value name="y1">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="y2">
        <shadow type="math_number">
            <field name="NUM">1000</field>
        </shadow>
    </value>
</block>

<block type="e2botGetConstrain" id="e2botGetConstrain">
    <value name="input">
        <shadow type="math_number">
            <field name="NUM">50</field>
        </shadow>
    </value>
    <value name="x1">
        <shadow type="math_number">
            <field name="NUM">1</field>
        </shadow>
    </value>
    <value name="x2">
        <shadow type="math_number">
            <field name="NUM">100</field>
        </shadow>
    </value>
</block>

</category>
<category name="%{BKY_E2BOT_EXPANSION_CATEGORY}" id="E2BOT_EXPANSION_CATEGORY" colour="#0049EE" secondaryColour="#0024F7" >
    <block type="e2botSetServo" id="e2botSetServo">
        <value name="servoDegree">
            <shadow type="math_half_angle">
                <field name="NUM">90</field>
            </shadow>
        </value>
    </block>
    <block type="e2botSetMotorExt" id="e2botSetMotorExt">
        <value name="extMotorPower">
            <shadow type="math_sign100_number">
                <field name="NUM">75</field>
            </shadow>
        </value>
    </block>

</category>
        `;
}

exports = addToolbox;
