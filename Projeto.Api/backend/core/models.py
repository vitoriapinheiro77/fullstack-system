from django.db import models

class Produto(models.Model):
   nome = models.CharField(max_length=100)
   preço = models.DecimalField(max_digits=10, decimal_places=2)
   estoque = models.IntegerField()

def __str__(self):
    return self.nome
