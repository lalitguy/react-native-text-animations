import Container from "@/example/components/Container";
import { useCallback, useRef, useState } from "react";
import { useFocusEffect } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import AnimatedText from "react-native-text-animations";

const bars = [36, 56, 43, 72, 52, 88, 64];
const recentActivities = [
  { title: "Morning walk", detail: "32 min  ·  2.4 km" },
  { title: "Focus session", detail: "25 min  ·  Deep work" },
  { title: "Evening stretch", detail: "12 min  ·  Recovery" },
];
const liftIn = (distance = 12) => ({
  tracks: [
    { property: "opacity" as const, inputRange: [0, 1], outputRange: [0, 1] },
    {
      property: "translateY" as const,
      inputRange: [0, 1],
      outputRange: [distance, 0],
    },
  ],
});

const Dashboard = () => {
  const [animationKey, setAnimationKey] = useState(0);
  const hasFocused = useRef(false);

  useFocusEffect(
    useCallback(() => {
      if (hasFocused.current) {
        setAnimationKey((key) => key + 1);
      } else {
        hasFocused.current = true;
      }
    }, [])
  );

  return (
    <View style={styles.screen}>
      <Container>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.content}
          showsVerticalScrollIndicator={false}
        >
          <Text style={styles.kicker}>YOUR DAILY OVERVIEW</Text>
          <AnimatedText
            key={animationKey}
            text="Good Morning"
            animation={{
              tracks: [
                {
                  property: "opacity",
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                },
                {
                  property: "translateY",
                  inputRange: [0, 1],
                  outputRange: [28, 0],
                },
              ],
            }}
            textStyle={styles.greeting}
            wrapperStyle={styles.greetingWrap}
            stagger={{ by: "word", gap: 140 }}
            duration={650}
            transition={{ type: "timing", easing: "easeOut" }}
          />

          <View style={styles.divider} />

          <View style={styles.sectionHeading}>
            <AnimatedText
              key={`overview-${animationKey}`}
              text="Overview"
              animation={liftIn()}
              textStyle={styles.sectionTitle}
              wrapperStyle={styles.oneLine}
              stagger={{ by: "none" }}
              delay={180}
              duration={450}
            />
            <Text style={styles.range}>THIS WEEK</Text>
          </View>

          <View style={styles.metrics}>
            <View style={[styles.metricCard, styles.darkCard]}>
              <AnimatedText
                key={`steps-label-${animationKey}`}
                text="STEPS"
                animation={liftIn(6)}
                textStyle={styles.metricLabel}
                wrapperStyle={styles.oneLine}
                stagger={{ by: "none" }}
                delay={220}
                duration={300}
              />
              <AnimatedText
                key={`steps-value-${animationKey}`}
                text="8,240"
                animation={{
                  tracks: [
                    {
                      property: "opacity",
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    },
                    {
                      property: "translateY",
                      inputRange: [0, 1],
                      outputRange: [14, 0],
                    },
                    {
                      property: "scale",
                      inputRange: [0, 1],
                      outputRange: [0.88, 1],
                    },
                  ],
                }}
                textStyle={styles.metricValue}
                wrapperStyle={styles.oneLine}
                stagger={{ by: "none" }}
                delay={280}
                duration={480}
              />
              <AnimatedText
                key={`steps-note-${animationKey}`}
                text="↑ 12% this week"
                animation={{
                  tracks: [
                    {
                      property: "opacity",
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    },
                  ],
                }}
                textStyle={styles.metricNote}
                wrapperStyle={styles.oneLine}
                stagger={{ by: "none" }}
                delay={470}
                duration={350}
              />
            </View>
            <View style={[styles.metricCard, styles.limeCard]}>
              <AnimatedText
                key={`active-label-${animationKey}`}
                text="ACTIVE"
                animation={liftIn(6)}
                textStyle={[styles.metricLabel, styles.darkInk]}
                wrapperStyle={styles.oneLine}
                stagger={{ by: "none" }}
                delay={260}
                duration={300}
              />
              <AnimatedText
                key={`active-value-${animationKey}`}
                text="54 min"
                animation={{
                  tracks: [
                    {
                      property: "opacity",
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    },
                    {
                      property: "translateY",
                      inputRange: [0, 1],
                      outputRange: [14, 0],
                    },
                    {
                      property: "scale",
                      inputRange: [0, 1],
                      outputRange: [0.88, 1],
                    },
                  ],
                }}
                textStyle={[styles.metricValue, styles.darkInk]}
                wrapperStyle={styles.oneLine}
                stagger={{ by: "none" }}
                delay={340}
                duration={480}
              />
              <AnimatedText
                key={`active-note-${animationKey}`}
                text="Daily goal: 45 min"
                animation={{
                  tracks: [
                    {
                      property: "opacity",
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    },
                  ],
                }}
                textStyle={[styles.metricNote, styles.darkInk]}
                wrapperStyle={styles.oneLine}
                stagger={{ by: "none" }}
                delay={530}
                duration={350}
              />
            </View>
          </View>

          <View style={styles.chartCard}>
            <View style={styles.chartHeader}>
              <View>
                <AnimatedText
                  key={`chart-title-${animationKey}`}
                  text="Weekly activity"
                  animation={liftIn(10)}
                  textStyle={styles.chartTitle}
                  wrapperStyle={styles.oneLine}
                  stagger={{ by: "word", gap: 80 }}
                  delay={650}
                  duration={400}
                />
                <AnimatedText
                  key={`chart-sub-${animationKey}`}
                  text="A steady start"
                  animation={{
                    tracks: [
                      {
                        property: "opacity",
                        inputRange: [0, 1],
                        outputRange: [0, 1],
                      },
                    ],
                  }}
                  textStyle={styles.chartSub}
                  wrapperStyle={styles.oneLine}
                  stagger={{ by: "none" }}
                  delay={760}
                  duration={350}
                />
              </View>
              <AnimatedText
                key={`chart-total-${animationKey}`}
                text="5.8h"
                animation={{
                  tracks: [
                    {
                      property: "opacity",
                      inputRange: [0, 1],
                      outputRange: [0, 1],
                    },
                    {
                      property: "scale",
                      inputRange: [0, 1],
                      outputRange: [0.8, 1],
                    },
                  ],
                }}
                textStyle={styles.chartTotal}
                wrapperStyle={styles.oneLine}
                stagger={{ by: "none" }}
                delay={760}
                duration={400}
              />
            </View>
            <View style={styles.chart}>
              {bars.map((height, index) => (
                <View key={index} style={styles.barColumn}>
                  <View
                    style={[
                      styles.bar,
                      { height },
                      index === 5 ? styles.activeBar : null,
                    ]}
                  />
                  <Text style={styles.dayLabel}>
                    {["M", "T", "W", "T", "F", "S", "S"][index]}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.recentHeading}>
            <AnimatedText
              key={`recent-title-${animationKey}`}
              text="Recent activity"
              animation={liftIn(12)}
              textStyle={styles.sectionTitle}
              wrapperStyle={styles.oneLine}
              stagger={{ by: "word", gap: 90 }}
              delay={930}
              duration={450}
            />
            <Text style={styles.range}>LATEST</Text>
          </View>

          <View style={styles.activityCard}>
            {recentActivities.map((activity, index) => (
              <View
                key={activity.title}
                style={[
                  styles.activityRow,
                  index < recentActivities.length - 1
                    ? styles.activityRowDivider
                    : null,
                ]}
              >
                <View
                  style={[
                    styles.activityDot,
                    index === 0 ? styles.activityDotActive : null,
                  ]}
                />
                <View style={styles.activityCopy}>
                  <AnimatedText
                    key={`activity-title-${animationKey}-${index}`}
                    text={activity.title}
                    animation={{
                      tracks: [
                        {
                          property: "opacity",
                          inputRange: [0, 1],
                          outputRange: [0, 1],
                        },
                        {
                          property: "translateX",
                          inputRange: [0, 1],
                          outputRange: [-12, 0],
                        },
                      ],
                    }}
                    textStyle={styles.activityTitle}
                    wrapperStyle={styles.oneLine}
                    stagger={{ by: "word", gap: 65 }}
                    delay={1060 + index * 120}
                    duration={400}
                  />
                  <AnimatedText
                    key={`activity-detail-${animationKey}-${index}`}
                    text={activity.detail}
                    animation={{
                      tracks: [
                        {
                          property: "opacity",
                          inputRange: [0, 1],
                          outputRange: [0, 1],
                        },
                      ],
                    }}
                    textStyle={styles.activityDetail}
                    wrapperStyle={styles.oneLine}
                    stagger={{ by: "none" }}
                    delay={1160 + index * 120}
                    duration={350}
                  />
                </View>
                <Text style={styles.activityCheck}>DONE</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </Container>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F3F2EC" },
  scroll: { flex: 1, width: "100%" },
  content: {
    flexGrow: 1,
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 28,
  },
  oneLine: { flexDirection: "row", flexWrap: "nowrap" },
  kicker: {
    color: "#777C75",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2.2,
    marginBottom: 10,
  },
  greetingWrap: { flexDirection: "row", flexWrap: "nowrap" },
  greeting: {
    color: "#192A27",
    fontSize: 38,
    lineHeight: 42,
    fontWeight: "800",
    letterSpacing: -1.2,
  },
  divider: {
    height: 1,
    backgroundColor: "#D8DAD2",
    marginTop: 10,
    marginBottom: 28,
  },
  sectionHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  sectionTitle: {
    color: "#192A27",
    fontSize: 19,
    fontWeight: "800",
    letterSpacing: -0.3,
  },
  range: {
    color: "#777C75",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.6,
  },
  metrics: { flexDirection: "row", gap: 12 },
  metricCard: {
    flex: 1,
    borderRadius: 18,
    padding: 16,
    minHeight: 132,
    justifyContent: "space-between",
  },
  darkCard: { backgroundColor: "#1D302D" },
  limeCard: { backgroundColor: "#D6E96B" },
  metricLabel: {
    color: "#B7C6BB",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1.8,
  },
  metricValue: {
    color: "#F7F5EB",
    fontSize: 26,
    fontWeight: "800",
    letterSpacing: -0.8,
  },
  metricNote: { color: "#B7C6BB", fontSize: 10, fontWeight: "500" },
  darkInk: { color: "#26312A" },
  chartCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 18,
    marginTop: 14,
  },
  chartHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chartTitle: { color: "#192A27", fontSize: 15, fontWeight: "700" },
  chartSub: { color: "#858A82", fontSize: 11, marginTop: 4 },
  chartTotal: { color: "#192A27", fontSize: 18, fontWeight: "800" },
  chart: {
    height: 120,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-between",
    paddingTop: 18,
  },
  barColumn: {
    flex: 1,
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
  },
  bar: {
    width: 16,
    maxHeight: 82,
    backgroundColor: "#DDE2D8",
    borderRadius: 8,
  },
  activeBar: { backgroundColor: "#A8C33E" },
  dayLabel: { color: "#858A82", fontSize: 9, fontWeight: "600" },
  recentHeading: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 26,
    marginBottom: 12,
  },
  activityCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    paddingHorizontal: 16,
  },
  activityRow: {
    flexDirection: "row",
    alignItems: "center",
    minHeight: 68,
    gap: 12,
  },
  activityRowDivider: { borderBottomWidth: 1, borderBottomColor: "#EEF0EA" },
  activityDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D8DED4",
  },
  activityDotActive: { backgroundColor: "#A8C33E" },
  activityCopy: { flex: 1, gap: 3 },
  activityTitle: { color: "#192A27", fontSize: 13, fontWeight: "700" },
  activityDetail: { color: "#858A82", fontSize: 10, fontWeight: "500" },
  activityCheck: {
    color: "#858A82",
    fontSize: 8,
    fontWeight: "700",
    letterSpacing: 1,
  },
});

export default Dashboard;
