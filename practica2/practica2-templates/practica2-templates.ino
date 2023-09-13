#include <json.hpp>
#include <inja.hpp>
#include <SPIFFS.h>
#include <WiFi.h>
WiFiServer server(80);
WiFiClient client;

#ifdef __cplusplus
extern "C" {
#endif
uint8_t temprature_sens_read();
#ifdef __cplusplus
}
#endif

uint8_t temprature_sens_read();

void setup()
{
  Serial.begin(9600);
  WiFi.disconnect();
  delay(3000);
  Serial.println("Iniciando");
  WiFi.begin("IoT","1t3s0IoT23");
  while ((!(WiFi.status() == WL_CONNECTED))){
    Serial.print("......");
    delay(300);
  }
  Serial.println("Conexion establecida con el SSDI!");
  Serial.println((WiFi.localIP()));

  if (!SPIFFS.begin(true)) {
    Serial.println("An Error has occurred while mounting SPIFFS");
    return;
  }

  server.begin();
}

void loop()
{
  client = server.available();
  if (!client) { return; }
  while(!client.available()){ delay(1); }
  	
  nlohmann::json data;

  data["secondsActive"] = (millis()/1000);
  data["temperature"] = ((temprature_sens_read() - 32 ) / 1.8);

  inja::Environment env;

  	
  inja::Template temp = env.parse_template("/spiffs/template.txt");
  std::string result = env.render(temp, data);

  client.flush();
  client.println("HTTP/1.1 200 OK");
  client.println("Content-Type: text/html");
  client.println("");
  client.println()

  delay(1);
}
