package edu.ntnu.idatt2105.controller;

import edu.ntnu.idatt2105.model.Calculate;
import edu.ntnu.idatt2105.model.CalculationRequest;
import edu.ntnu.idatt2105.service.CalculationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
/**
 * REST controller for handling calculation requests.
 * This controller provides endpoints to perform mathematical calculations.
 */
@CrossOrigin(origins = "http://localhost:5173")
@RestController
public class CalculationController {

  @Autowired
  private CalculationService calculationService;

  private static final Logger logger = LoggerFactory.getLogger(CalculationController.class);

  /**
   * Endpoint to calculate an arithmetic expression.
   *
   * @param calculationRequest The arithmetic expression to calculate.
   * @return Calculate object containing the result of the calculation.
   */
  @PostMapping("/calculate")
  public Calculate calculateExpression(@RequestBody CalculationRequest calculationRequest) {
    String expression = calculationRequest.getExpression();
    logger.info("Received calculation request for expression: {}", expression);
    Calculate result = calculationService.performCalculation(expression);
    logger.info("Calculation result: {}", result);
    return result;
  }
}
