import { Dimensions, StyleSheet, Text, View, Image } from "react-native";
import avatarImage from "./assets/avatar.png";
import { LineChart, ProgressChart } from "react-native-chart-kit";

export default function App() {
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: "#fff",
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(51, 51, 204, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };

  const progressChartData = {
    labels: ["2021: ", "2022: ", "2023: "], // optional
    data: [0.4, 0.6, 0.8],
  };

  const screenWidth = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.card_view}>
        <View style={styles.user_card}>
          <Image source={avatarImage} style={styles.avatar}></Image>
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Mateo Landry
            </Text>
            <Text>@mateo0719</Text>
          </View>
        </View>
        <View>
          <View style={styles.chartCard_header}>
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontSize: 15, color: "gray", marginBottom: 15 }}>
                Current Balance
              </Text>
              <View
                style={{ flexDirection: "row", gap: 10, alignItems: "center" }}
              >
                <Text
                  style={{ fontSize: 30, fontWeight: "bold", color: "black" }}
                >
                  $500.00
                </Text>
                <Text style={{ fontSize: 20, color: "#7070db" }}>USD</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  gap: 5,
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ fontSize: 15, color: "black", fontWeight: "bold" }}
                >
                  {" = $2,106,775.00"}
                </Text>
                <Text style={{ fontSize: 13, color: "#7070db" }}>COP</Text>
              </View>
            </View>
            <LineChart
              data={{
                labels: [
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ],
                datasets: [
                  {
                    data: [
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                      Math.random() * 100,
                    ],
                  },
                ],
              }}
              width={screenWidth - 40} // from react-native
              height={220}
              yAxisLabel="$"
              yAxisSuffix="k"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#fff",
                backgroundGradientFrom: "#fff",
                backgroundGradientTo: "#fff",
                decimalPlaces: 2, // optional, defaults to 2dp
                color: (opacity = 1) => `rgba(51, 51, 204, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(90, 90, 90, ${opacity})`,
                style: {
                  borderRadius: 16,
                },
                propsForDots: {
                  r: "6",
                  strokeWidth: "2",
                  stroke: "#0000cc",
                },
              }}
              bezier
              style={{
                marginVertical: 28,
                borderRadius: 10,
              }}
            />
          </View>
          <View style={styles.pinechart}>
            <ProgressChart
              data={progressChartData}
              width={screenWidth - 60}
              height={220}
              strokeWidth={16}
              radius={32}
              chartConfig={chartConfig}
              hideLegend={false}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "start",
  },
  card_view: {
    marginTop: 50,
  },
  user_card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginLeft: 20,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: "#5c5cd6",
    borderWidth: 4,
  },
  chartCard_header: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    padding: 10,
  },
  pinechart: {
    backgroundColor: "#fff",
    marginHorizontal: 20,
    paddingLeft: 20,
    marginTop: 20,
    borderRadius: 10,
  },
});
