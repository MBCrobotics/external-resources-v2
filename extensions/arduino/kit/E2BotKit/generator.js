/* eslint-disable func-style */
/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
function addGenerator(Blockly) {

    Blockly.Arduino.e2botSetup = function (block) {
        var setupBranch = Blockly.Arduino.statementToCode(block, 'substack');
        setupBranch = Blockly.Arduino.addLoopTrap(setupBranch, block.id);
        var loopBranch = Blockly.Arduino.statementToCode(block, 'substack1');
        loopBranch = Blockly.Arduino.addLoopTrap(loopBranch, block.id);

        Blockly.Arduino.includes_['arduino'] = `#include "MBC_Robot.h"`;
        Blockly.Arduino.definitions_['arduino'] = `MBC Robot;`;
        Blockly.Arduino.setups_['arduino'] = "//setup once\n" + Blockly.Arduino.INDENT + "Robot.init();\n" + setupBranch;
        Blockly.Arduino.loops_['arduino'] = "//loop forever\n" + loopBranch + Blockly.Arduino.INDENT + "doInLoop();";
        Blockly.Arduino.doInLoop_['arduino'] = "Robot.MpuUpdata();";
        return '';
    };

    //========================================================================
    Blockly.Arduino.e2botSetMotorRunFree = function (block) {
        const leftMotorPower_ = Blockly.Arduino.valueToCode(block, 'leftMotorPower', Blockly.Arduino.ORDER_ATOMIC);
        const rightMotorPower_ = Blockly.Arduino.valueToCode(block, 'rightMotorPower', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setMotorRunFree(${leftMotorPower_}, ${rightMotorPower_});\n`;
    };

    Blockly.Arduino.e2botSetMotorRunForward = function (block) {
        const motorPower_ = Blockly.Arduino.valueToCode(block, 'motorPower', Blockly.Arduino.ORDER_ATOMIC);
        const forwardCm_ = Blockly.Arduino.valueToCode(block, 'forwardCm', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setMotorRunMode(0, ${motorPower_}, ${motorPower_}, ${forwardCm_} * 1000L);\n`;
    };

    Blockly.Arduino.e2botSetMotorRunTurn = function (block) {
        const leftMotorPower_ = Blockly.Arduino.valueToCode(block, 'leftMotorPower', Blockly.Arduino.ORDER_ATOMIC);
        const rightMotorPower_ = Blockly.Arduino.valueToCode(block, 'rightMotorPower', Blockly.Arduino.ORDER_ATOMIC);
        const turnTheta_ = Blockly.Arduino.valueToCode(block, 'turnTheta', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setMotorRunMode(1, ${leftMotorPower_}, ${rightMotorPower_}, ${turnTheta_} * 1000L);\n`;
    };

    Blockly.Arduino.e2botSetMotorRunTime = function (block) {
        const leftMotorPower_ = Blockly.Arduino.valueToCode(block, 'leftMotorPower', Blockly.Arduino.ORDER_ATOMIC);
        const rightMotorPower_ = Blockly.Arduino.valueToCode(block, 'rightMotorPower', Blockly.Arduino.ORDER_ATOMIC);
        const runTime_ = Blockly.Arduino.valueToCode(block, 'runTime', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setMotorRunMode(2, ${leftMotorPower_}, ${rightMotorPower_}, ${runTime_} * 1000L);\n`;
    };

    Blockly.Arduino.e2botSetMotorRunStop = function (block) {
        return `Robot.setMotorRunFree(0, 0);\n`;
    };

    Blockly.Arduino.e2botSetMotorSync = function (block) {
        const syncOption_ = this.getFieldValue('syncOption');

        return `Robot.setMotorSync(${syncOption_});\n`;
    };

    Blockly.Arduino.e2botResetEncoderCm = function (block) {
        const resetEncoderCmOption_ = this.getFieldValue('resetEncoderCmOption');

        return `Robot.ResetEncoderCm(${resetEncoderCmOption_});\n`;
    };

    Blockly.Arduino.e2botGetEncoderCm = function (block) {
        const getEncoderCmOption_ = this.getFieldValue('getEncoderCmOption');

        return [`Robot.getEncoderCm(${getEncoderCmOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botResetEncoder = function (block) {
        const resetEncoderOption_ = this.getFieldValue('resetEncoderOption');

        return `Robot.ResetEncoder(${resetEncoderOption_});\n`;
    };

    Blockly.Arduino.e2botGetEncoder = function (block) {
        const getEncoderOption_ = this.getFieldValue('getEncoderOption');

        return [`Robot.getEncoder(${getEncoderOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetSpeed = function (block) {
        const getSpeedOption_ = this.getFieldValue('getSpeedOption');

        return [`Robot.getSpeed(${getSpeedOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };
    //=========================================================================

    Blockly.Arduino.e2botSetBuzzer = function (block) {
        const setBuzzerOptions_ = this.getFieldValue('setBuzzerOptions');
        const buzzerSec_ = Blockly.Arduino.valueToCode(block, 'buzzerSec', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setBuzzer(${setBuzzerOptions_}, ${buzzerSec_});\n`;
    };

    Blockly.Arduino.e2botSetRgbLed = function (block) {
        const e2botSetRgbLedRed_ = Blockly.Arduino.valueToCode(block, 'e2botSetRgbLedRed', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetRgbLedGreen_ = Blockly.Arduino.valueToCode(block, 'e2botSetRgbLedGreen', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetRgbLedBlue_ = Blockly.Arduino.valueToCode(block, 'e2botSetRgbLedBlue', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setRGBLED(${e2botSetRgbLedRed_}, ${e2botSetRgbLedGreen_}, ${e2botSetRgbLedBlue_});\n`;
    };

    //=========================================================================
    Blockly.Arduino.e2botSetLcdShowColorOption = function (block) {
        var code = block.getFieldValue('e2botSetLcdShowColor');
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botSetLcdShowStr = function (block) {
        const e2botSetLcdShowStrInput_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdShowStrInput', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetLcdShowStrX_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdShowStrX', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetLcdShowStrY_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdShowStrY', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetLcdShowColor_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdShowColor', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setLCDshow(${e2botSetLcdShowStrInput_}, ${e2botSetLcdShowStrX_}, ${e2botSetLcdShowStrY_}, ${e2botSetLcdShowColor_});\n`;
    };

    Blockly.Arduino.e2botSetLcdShowNum = function (block) {
        const e2botSetLcdShowNumInput_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdShowNumInput', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetLcdShowNumX_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdShowNumX', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetLcdShowNumY_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdShowNumY', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetLcdShowColor_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdShowColor', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setLCDshow(${e2botSetLcdShowNumInput_}, ${e2botSetLcdShowNumX_}, ${e2botSetLcdShowNumY_}, ${e2botSetLcdShowColor_});\n`;
    };

    Blockly.Arduino.e2botSetLcdPixel = function (block) {
        const e2botSetLcdPixelX_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdPixelX', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetLcdPixelY_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdPixelY', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetLcdShowColor_ = Blockly.Arduino.valueToCode(block, 'e2botSetLcdShowColor', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setLCDpixel(${e2botSetLcdPixelX_}, ${e2botSetLcdPixelY_}, ${e2botSetLcdShowColor_});\n`;
    };

    Blockly.Arduino.e2botSetLcdClear = function (block) {

        return `Robot.setLCDclear();\n`;
    };

    Blockly.Arduino.e2botSetColorPalette = function (block) {
        const e2botSetColorPaletteRed_ = Blockly.Arduino.valueToCode(block, 'e2botSetColorPaletteRed', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetColorPaletteGreen_ = Blockly.Arduino.valueToCode(block, 'e2botSetColorPaletteGreen', Blockly.Arduino.ORDER_ATOMIC);
        const e2botSetColorPaletteBlue_ = Blockly.Arduino.valueToCode(block, 'e2botSetColorPaletteBlue', Blockly.Arduino.ORDER_ATOMIC);

        return [`Robot.setColorPalette(${e2botSetColorPaletteRed_}, ${e2botSetColorPaletteGreen_}, ${e2botSetColorPaletteBlue_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botSensorTestMode = function (block) {

        return `Robot.SensorTestMode();\n`;
    };
    //====================================================================

    Blockly.Arduino.e2botSetIROnOff = function (block) {
        const setIROnOffOption_ = this.getFieldValue('setIROnOffOption');

        return `Robot.setIROnOff(${setIROnOffOption_});\n`;
    };

    Blockly.Arduino.e2botSetSearchLine = function (block) {
        const LineBlackWhiteOption_ = this.getFieldValue('LineBlackWhiteOption');

        return `Robot.setSearchLine(${LineBlackWhiteOption_});\n`;
    };

    Blockly.Arduino.e2botGetLinePosIR = function (block) {

        return [`Robot.getLinePosIR()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetLineWidthIR = function (block) {

        return [`Robot.getLineWidthIR()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetCalibIR = function (block) {
        const irNum_ = Blockly.Arduino.valueToCode(block, 'irNum', Blockly.Arduino.ORDER_ATOMIC);

        return [`Robot.getCalibIR(${irNum_} - 1)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetAnalogIR = function (block) {
        const irNum_ = Blockly.Arduino.valueToCode(block, 'irNum', Blockly.Arduino.ORDER_ATOMIC);

        return [`Robot.getAnalogIR(${irNum_} - 1)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetBoolIR = function (block) {
        const irNum_ = Blockly.Arduino.valueToCode(block, 'irNum', Blockly.Arduino.ORDER_ATOMIC);

        return [`Robot.getBoolIR(${irNum_} - 1)`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetByteIR = function (block) {

        return [`Robot.getByteIR()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botSetLineColorRecoder = function (block) {
        const ColorBlackWhiteOption_ = this.getFieldValue('ColorBlackWhiteOption');

        return `Robot.setLineColorRecoder(${ColorBlackWhiteOption_});\n`;
    };

    //======================================================================

    Blockly.Arduino.e2botMpuUpdataOnOff = function (block) {
        const setUpdataOnOffOption_ = this.getFieldValue('setUpdataOnOffOption');

        return `Robot.MpuUpdataOnOff(${setUpdataOnOffOption_});\n`;
    };

    Blockly.Arduino.e2botGetAngXYZ = function (block) {
        const getAngXyzOption_ = this.getFieldValue('getAngXyzOption');

        return [`Robot.getAngXYZ(${getAngXyzOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetVelXYZ = function (block) {
        const getVelXyzOption_ = this.getFieldValue('getVelXyzOption');

        return [`Robot.getVelXYZ(${getVelXyzOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botResetMPU = function (block) {
        return `Robot.resetMPU();\n`;
    };

    Blockly.Arduino.e2botCalibrateMPU = function (block) {
        const calibTime_ = Blockly.Arduino.valueToCode(block, 'calibTime', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.CalibrateMPU(${calibTime_});\n`;
    };
    //======================================================================

    Blockly.Arduino.e2botSetCSLOnOff = function (block) {
        const SetCSLOnOffOption_ = this.getFieldValue('SetCSLOnOffOption');

        return `Robot.setCSLOnOff(${SetCSLOnOffOption_});\n`;
    };

    Blockly.Arduino.e2botCompareColorHue = function (block) {
        const colorHueOption_ = this.getFieldValue('colorHueOption');

        return [`Robot.CompareColorHue(${colorHueOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetColorHue = function (block) {

        return [`Robot.getColorHue()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetColorCaliRgb = function (block) {
        const GetColorCaliRgbOption_ = this.getFieldValue('GetColorCaliRgbOption');

        return [`Robot.getColorCaliRGB(${GetColorCaliRgbOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetColorRgb = function (block) {
        const GetColorRgbOption_ = this.getFieldValue('GetColorRgbOption');

        return [`Robot.getColorRGB(${GetColorRgbOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    //========================================================================

    Blockly.Arduino.e2botGetUltrasonic = function (block) {
        const GetUltrasonicOption_ = this.getFieldValue('GetUltrasonicOption');

        return [`Robot.getUltrasonic(${GetUltrasonicOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetLightSensor = function (block) {

        return [`Robot.getLightSensor()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetKnobSensor = function (block) {

        return [`Robot.getKnobSensor()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetVoltSensor = function (block) {

        return [`Robot.getVoltSensor()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetIrRec = function (block) {

        return [`Robot.getIRrec()`, Blockly.Arduino.ORDER_ATOMIC];
    };
    //======================================================================

    Blockly.Arduino.e2botCompareLimitSensorBumped = function (block) {

        return `Robot.CompareLimitSensorBumped();\n`;
    };

    Blockly.Arduino.e2botCompareLimitSensor = function (block) {

        return [`Robot.CompareLimitSensor()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botCompareTouchSensor = function (block) {

        return [`Robot.CompareTouchSensor()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botCompareLR = function (block) {
        const compareLrOption_ = this.getFieldValue('compareLrOption');

        return [`Robot.CompareLR(${compareLrOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botCompareHallSensor = function (block) {

        return [`Robot.CompareHallSensor()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botCompareHumanSensor = function (block) {

        return [`Robot.CompareHumanSensor()`, Blockly.Arduino.ORDER_ATOMIC];
    };

    //======================================================================

    Blockly.Arduino.e2botResetTimer = function (block) {
        const resetTimerOption_ = this.getFieldValue('resetTimerOption');

        return `Robot.ResetTimer(${resetTimerOption_});\n`;
    };

    Blockly.Arduino.e2botGetTimer = function (block) {
        const getTimerOption_ = this.getFieldValue('getTimerOption');

        return [`Robot.getTimer(${getTimerOption_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    //======================================================================

    Blockly.Arduino.e2botArraySetup = function (block) {

        const arrayName_ = Blockly.Arduino.valueToCode(block, 'arrayName', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const arraySize_ = Blockly.Arduino.valueToCode(block, 'arraySize', Blockly.Arduino.ORDER_ATOMIC);
        var name = `double MyArray_${arrayName_}`;
        name += `[${arraySize_} + 1] = {};`;
        var size = `int sizeMyArray_${arrayName_}`;
        size += ` = ${arraySize_};`;
        Blockly.Arduino.definitions_['definitions_MyArray'] = name;
        Blockly.Arduino.definitions_['definitions_sizeMyArray'] = size;

        return '';
    };

    Blockly.Arduino.e2botArrayWrite = function (block) {

        const arrayData_ = Blockly.Arduino.valueToCode(block, 'arrayData', Blockly.Arduino.ORDER_ATOMIC);
        const arrayName_ = Blockly.Arduino.valueToCode(block, 'arrayName', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const arrayIndex_ = Blockly.Arduino.valueToCode(block, 'arrayIndex', Blockly.Arduino.ORDER_ATOMIC);

        return `MyArray_${arrayName_}[constrain(${arrayIndex_}, 0, sizeMyArray_${arrayName_})] =  ${arrayData_};\n`;
    };

    Blockly.Arduino.e2botArrayRead = function (block) {

        const arrayName_ = Blockly.Arduino.valueToCode(block, 'arrayName', Blockly.Arduino.ORDER_ATOMIC).slice(1, -1);
        const arrayIndex_ = Blockly.Arduino.valueToCode(block, 'arrayIndex', Blockly.Arduino.ORDER_ATOMIC);

        return [`MyArray_${arrayName_}[constrain(${arrayIndex_}, 0, sizeMyArray_${arrayName_})]`, Blockly.Arduino.ORDER_ATOMIC];
    };

    //=========================================================================

    Blockly.Arduino.e2botGetMax = function (block) {

        const value1_ = Blockly.Arduino.valueToCode(block, 'value1', Blockly.Arduino.ORDER_ATOMIC);
        const value2_ = Blockly.Arduino.valueToCode(block, 'value2', Blockly.Arduino.ORDER_ATOMIC);

        return [`max(${value1_}, ${value2_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetMin = function (block) {

        const value1_ = Blockly.Arduino.valueToCode(block, 'value1', Blockly.Arduino.ORDER_ATOMIC);
        const value2_ = Blockly.Arduino.valueToCode(block, 'value2', Blockly.Arduino.ORDER_ATOMIC);

        return [`min(${value1_}, ${value2_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetMap = function (block) {

        const input_ = Blockly.Arduino.valueToCode(block, 'input', Blockly.Arduino.ORDER_ATOMIC);
        const x1_ = Blockly.Arduino.valueToCode(block, 'x1', Blockly.Arduino.ORDER_ATOMIC);
        const x2_ = Blockly.Arduino.valueToCode(block, 'x2', Blockly.Arduino.ORDER_ATOMIC);
        const y1_ = Blockly.Arduino.valueToCode(block, 'y1', Blockly.Arduino.ORDER_ATOMIC);
        const y2_ = Blockly.Arduino.valueToCode(block, 'y2', Blockly.Arduino.ORDER_ATOMIC);

        return [`map(${input_}, ${x1_}, ${x2_}, ${y1_}, ${y2_})`, Blockly.Arduino.ORDER_ATOMIC];
    };

    Blockly.Arduino.e2botGetConstrain = function (block) {

        const input_ = Blockly.Arduino.valueToCode(block, 'input', Blockly.Arduino.ORDER_ATOMIC);
        const x1_ = Blockly.Arduino.valueToCode(block, 'x1', Blockly.Arduino.ORDER_ATOMIC);
        const x2_ = Blockly.Arduino.valueToCode(block, 'x2', Blockly.Arduino.ORDER_ATOMIC);

        return [`constrain(${input_}, min(${x1_}, ${x2_}), max(${x1_}, ${x2_}))`, Blockly.Arduino.ORDER_ATOMIC];
    };

    //=========================================================================

    Blockly.Arduino.e2botSetServo = function (block) {
        const setServoOption_ = this.getFieldValue('setServoOption');
        const servoDegree_ = Blockly.Arduino.valueToCode(block, 'servoDegree', Blockly.Arduino.ORDER_ATOMIC);
        var define_ = `Servo MyServo_${setServoOption_}`;
        var setup_ = `MyServo_${setServoOption_}.attach(${setServoOption_}, 544, 2400);`;

        Blockly.Arduino.includes_['includes_MyServo'] = '#include <Servo.h>';
        Blockly.Arduino.definitions_['definitions_MyServo'] = define_;
        Blockly.Arduino.setups_['setups_MyServo'] = setup_;
        return `servo_${setServoOption_}.write(${servoDegree_});\n`;
    };
    
    Blockly.Arduino.e2botSetMotorExt = function (block) {
        const extMotorPower_ = Blockly.Arduino.valueToCode(block, 'extMotorPower', Blockly.Arduino.ORDER_ATOMIC);

        return `Robot.setMotorExt(${extMotorPower_});\n`;
    };

    return Blockly;
}

exports = addGenerator;
