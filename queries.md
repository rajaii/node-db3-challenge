# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

SELECT ProductName, CategoryName FROM Products AS p
JOIN Categories as c ON c.CategoryId=p.CategoryId;

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderId, OrderDate, ShipperName FROM Orders as o
JOIN Shippers AS s ON o.ShipperId=s.ShipperId
WHERE OrderDate<'1997-01-09';

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductName, Quantity FROM Products as p
JOIN OrderDetails as o ON p.ProductId=o.ProductId
WHERE OrderID=10251;


### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderId, CustomerName, LastName FROM Orders AS o
JOIN Customers AS c ON o.CustomerId=c.CustomerId
JOIN Employees AS e ON o.EmployeeId=e.EmployeeId;

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.
###does not work properly, adds the wanted counts to the table giving all previous values null, 20 minute ruling it stretch so moved on
ALTER TABLE Categories 
ADD Count integer;

INSERT INTO Categories (count)
SELECT DISTINCT CategoryID
FROM Products WHERE categoryId=categoryId;

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 

ALTER TABLE OrderDetails
ADD ItemCount integer;