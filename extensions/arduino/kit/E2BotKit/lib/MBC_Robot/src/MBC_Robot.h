#ifndef _MBC_H_
#define _MBC_H_

#include <avr/pgmspace.h>
#include <Arduino.h>
#include <Wire.h>
#include <SPI.h>


#include "Adafruit_TCS34725.h"
#include "TimerFreeTone.h"
#include "MBC_TinyMPU6050.h"
#include "TFT_ST7735.h"
#include "IRremote.h"

//DDRD = B01001111;
//DDRB |= B00111111;
//DDRC = B00000001;
#define pinCSL 0 //PD0,out,low//ColorSensorLgiht
#define pinGVS1 2 //PD2,out,low
#define pinBuzzer 3 //PD3,out,low
#define pinLimit 4 //PD4,in,low
#define pinHall 5 //PD5,in,
#define pinMotorA 6 //PD6,out,low//MotorPWM
#define pinTouch 7 //PD7,in,low
#define pinRGBLED 8 //PB0,out,low
//SPI Pin : 9.10.11.13 TFT_LCD
#define pinMotorB 12 //PB4,out,low//MotorDIR

#define pinGVS0 A0	//PC0,out,low
#define pinIRreceiver A1 //PC1,in,low
#define pinKnob A2 //PC2,in,low
#define pinHuman A3 //PC3,in,low
//IIC Pin : A4.A5 //PC4 PC5
#define pinLight A6 //PC6,in,low
#define pinVolt A7 //PC7,in,low

/*
  Read:
  IR_raw 0~255 0x01~0x06
  IR_calib 0~100 0x07~0x0C
  IR_Byte  0x0D
  line_pos 0x0E (int8_t)
  line_num 0x0F

  IR_L 0x11
  IR_R 0x12

  US_CM 0~255 0x21
  US_Mm 0~4000 0x22

  ENC_L 0x31
  ENC_R 0x35
  
  SPD_L 0x39 
  SPD_R 0x3B  

  Motor_Finish 0x41
*/

#define getAnalogIR1 0x01
#define getAnalogIR2 0x02
#define getAnalogIR3 0x03
#define getAnalogIR4 0x04
#define getAnalogIR5 0x05
#define getAnalogIR6 0x06
#define getCalibIR1 0x07
#define getCalibIR2 0x08
#define getCalibIR3 0x09
#define getCalibIR4 0x0A
#define getCalibIR5 0x0B
#define getCalibIR6 0x0C
#define getIrByte 0x0D
#define getLinePos 0x0E
#define getLineWidth 0x0F
#define getIR_L 0x11
#define getIR_R 0x12
#define getUS_cm 0x21
#define getUS_mm 0x22//0x22~23
#define getENC_L 0x31//0x31~34
#define getENC_R 0x35//0x35~38
#define getSPD_L 0x39//0x39~3A
#define getSPD_R 0x3B//0x3B~3C  
#define getMotorFinish 0x41

/*Write
  IR_SW_On 0x81
  IR_SW_Off 0x82
  Search_B_Line 0x91
  Search_W_Line 0x92
  White recoder 0xA1
  Black recoder 0xA2
  Motor 0xB1
*/

#define setIrSwOn 0x81
#define setIrSwOff 0x82
#define setSearchBlackLine 0x91
#define setSearchWhiteLine 0x92
#define setWhiteRecoder 0xA1
#define setBlackRecoder 0xA2
#define setMotorForMode 0xB1
#define setMotorFreeMode 0xB2
#define getMotorSyncOn 0xC1
#define getMotorSyncOff 0xC2

#define MBC_LCDxyTempSize 14

class MBC {
  public:
	MBC();
    void init();
    void SensorTestMode(void);
	//===============================================================//
	void setMotorRunMode(byte mode, int Lp, int Rp, int32_t data);	//mode 0:cm,1:turn,2:time 
    void setMotorRunFree(int Lp, int Rp);
    void setMotorSync(byte num);//0:on,1:off
	bool CompareSpeed(byte LR, byte mode, int speed);
	int getSpeed(byte LR);
	bool CompareEncoder(byte LR, byte mode, int32_t deg);
	int32_t getEncoder(byte LR);
    void ResetEncoder(byte LR);
	bool CompareEncoderCm(byte LR, byte mode, double Cm);
	double getEncoderCm(byte LR);
    void ResetEncoderCm(byte LR);
	//===============================================================//
	void setLCDshow(char* str, int x, int y, int color);
    void setLCDshow(int num, int x, int y, int color);
    void setLCDshow(long num, int x, int y, int color);
    void setLCDshow(double num, int x, int y, int color);
    void setLCDshow(uint16_t num, int x, int y, int color);
    void setLCDshow(uint32_t num, int x, int y, int color);
	char* StrCmp(String Str1, String Str2);
	void setLCDpixel(int x, int y, int color);
    void setLCDclear();
	uint16_t setColorPalette(int r,int g,int b);
	//===============================================================//	
	void setCSLOnOff(byte OnOff);//Off:0,On:1
	bool CompareColorHue(byte Color);//0w,1r,2y,3g,4i,5b,6p,7bl
	int getColorHue();
	bool CompareColorCaliRGB(byte RGB, byte mode, int data);
	int getColorCaliRGB(byte RGB);//0r 1g 2b
	int getColorRGB(byte RGB);//RAW 0r 1g 2b
	void ColorUpdata();
	//===============================================================//	
    bool CompareVelXYZ(byte num, byte mode, int data);//0x 1y 2z
	int getVelXYZ(byte num);//0x 1y 2z
    bool CompareAngXYZ(byte num, byte mode, int data);//0x 1y 2z
	int getAngXYZ(byte num);//0x 1y 2z
    void ResetMPU();
    void CalibrateMPU(double sec);
	void MpuUpdata();
	void MpuUpdataOnOff(byte num);
	//===============================================================//
	bool CompareLR(byte num);
	int getLR(byte num);
	bool CompareUltrasonic(byte mode, int data, byte num);//mode{lessThan:0,MoreThan:1,Equal:2},num{cm:0,mm:1}
    int getUltrasonic(byte num);//0:cm 1:mm
	//===============================================================//
   	void setIROnOff(byte num);
    void setSearchLine(byte num);
    void setLineColorRecoder(byte num);
    byte getAnalogIR(byte num);//1~6
	bool CompareCalibIR(byte num, byte mode, int data);
    byte getCalibIR(byte num);
    byte getByteIR(void);
    bool getBoolIR(byte num);
    int getLinePosIR(void);
	bool CompareLinePosIR(byte mode,int pos);
    byte getLineWidthIR(void);
	bool CompareLineWidthIR(byte mode,int width);

	//===============================================================//
	void CompareLimitSensorBumped(void);
	bool CompareLimitSensor(void);
    int getLimitSensor(void);
	
    bool CompareHallSensor(void);
    int getHallSensor(void);
    
    bool CompareTouchSensor(void);
    int getTouchSensor(void);
    
	bool CompareHumanSensor(void);
    int getHumanSensor(void);
	
	bool CompareLightSensor(byte mode,int data);
    int getLightSensor(void);
	
	bool CompareKnobSensor(byte mode,int data);
	int getKnobSensor(void);
	
	bool CompareVoltSensor(byte mode,int data);
	double getVoltSensor(void);
	
	bool CompareIRrec(byte mode,uint32_t data);
	uint32_t getIRrec(void);
	//===============================================================//
	void setBuzzer(int freq, double time);
	void setRGBLED(int r, int g, int b);
	void setMotorExt(int spd);
	bool CompareTimer(byte num, byte mode, double sec);
	double getTimer(byte num);
    void ResetTimer(byte num);
    
	//===============================================================//
	
  private:
	Adafruit_TCS34725 E2ColorSensor;
	IRrecv E2IrReceiver;
	TFT_ST7735 E2LCD;
	MPU6050 E2MPU;
    //============================================//
    byte* getLineSensor();
	uint32_t getSensor(byte addr, byte sizes);
    void setSensor(byte addr);
    //============================================//
    char* LCDXyUsed(char* data, byte x, byte y, int color);
    void XyUsedClear();
    //============================================//
    void RGBLEDIO_0();
    void RGBLEDIO_1();
    //============================================//
    int32_t MBC_Encoder[3] = {};//0:L, 1:R, 2:C
	int32_t MBC_EncoderCm[3] = {};//0:L, 1:R, 2:C
	uint32_t MBC_TimerMs[10] = {};
	//============================================//
	byte IRSensorUpdata();
	//============================================//
	float fmap(float xin, float x1, float x2, float y1, float y2);
	//============================================//
	float wrap(float);
    int GyroResetX = 0;
	int GyroResetY = 0;
	int GyroResetZ = 0;
	int AngResetX = 0;
	int AngResetY = 0;
	int AngResetZ = 0;
	
	byte MotorSyncSw = 0;
	byte LineSw = 0;
	byte ColorSw = 0;
	byte GyroSw = 0;

	byte LineTracingMode = 0;//0:B,1:W	
	//int freeRam();
};

#endif /* _MBC_H_ */
