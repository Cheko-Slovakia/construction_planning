# Generated by Django 3.2.6 on 2021-09-29 17:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('cpmAPI', '0003_obra'),
    ]

    operations = [
        migrations.RenameField(
            model_name='obra',
            old_name='estado',
            new_name='fase',
        ),
    ]
