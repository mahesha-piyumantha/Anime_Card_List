"use client";

/**
 * framer motion is only works for client side rendering, then we
 *  have to separate component for the motion.div and using 'use-client'
 * directive and we render in this component as a client side rendering component
 *
 */

import { motion } from "framer-motion";

export const MotionDiv = motion.div;
