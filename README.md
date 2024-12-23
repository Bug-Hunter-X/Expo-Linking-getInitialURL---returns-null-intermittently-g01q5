# Expo Linking.getInitialURL() Returns Null Intermittently

This repository demonstrates a bug encountered when using Expo's `Linking.getInitialURL()` API. The method occasionally returns `null`, even when a deep link is expected, causing unexpected behavior in the application.

## Problem Description

The `Linking.getInitialURL()` function is used to retrieve the initial URL that launched the application. In some instances, this function unexpectedly returns `null`, preventing the app from processing deep link data correctly.

## Steps to Reproduce

While reproducing this bug consistently is challenging, it seems to occur more often in specific scenarios (e.g., certain Android devices, background process limitations).  The provided `bug.js` file contains the problematic code and a basic attempt at handling the `null` return value.

## Solution

The proposed solution (`bugSolution.js`) employs a more robust approach by implementing a retry mechanism and leveraging a timeout to handle situations where `getInitialURL()` may be delayed. This strategy enhances the reliability of deep link handling.