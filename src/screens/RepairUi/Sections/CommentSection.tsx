/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function CommentSection() {
  return (
    <View style={[styles.commentsection]}>
      <View style={styles.tableheader}>
        <Text
          style={{
            color: '#27548A',
            fontSize: 16,
            textDecorationLine: 'underline',
          }}
        >
          Description
        </Text>
        <Text style={{ fontSize: 16 }}>Review</Text>
      </View>
      <View style={styles.descriptioncontainer}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'thin',
            lineHeight: 20,
            color: '#333446',
          }}
        >
          From Leaky faucets to broken tikes our proffesional repair time
          handles all types of bathroom issues..{' '}
          <Text style={{ fontSize: 14, fontWeight: 'thin', color: '#27548A' }}>
            Read more
          </Text>
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  tableheader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 30,
  },
  commentsection: {
    borderRadius: 16,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  descriptioncontainer: {
    backgroundColor: '#eff6ff',
    marginLeft: -16,
    marginRight: -16,
    padding: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#c9cbcc',
    borderRadius: 12,
  },

});
