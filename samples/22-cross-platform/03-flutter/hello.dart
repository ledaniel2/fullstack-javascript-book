import 'package:flutter/material.dart';

void main() {
  runApp(const MaterialApp(
    home: Material(
      child: Center(
        child: Text("Hello, World!", textDirection: TextDirection.ltr)
      ),
    ),
  ));
}
