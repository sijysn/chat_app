# Generated by Django 3.2.3 on 2021-05-31 06:06

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='message',
            old_name='send_at',
            new_name='sent_at',
        ),
    ]
