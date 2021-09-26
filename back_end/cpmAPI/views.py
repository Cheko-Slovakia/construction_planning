from django.db.models import Q
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse
from cpmAPI.models import Test, Trabajador, Cliente
from cpmAPI.serializers import TestSerializer, TrabajadorSerializer, ClienteSerializer
from django.core.files.storage import default_storage
from django.core.exceptions import ObjectDoesNotExist
from cpmAPI.aux_functions import checkInt


# Create your views here.
@csrf_exempt
def testApi(request, id=0):
    if request.method == 'GET':
        tests = Test.objects.all()
        tests_serializer = TestSerializer(tests, many=True)
        return JsonResponse(tests_serializer.data, safe=False)

    elif request.method == 'POST':
        test_data = JSONParser().parse(request)
        test_serializer = TestSerializer(data=test_data)
        if test_serializer.is_valid():
            test_serializer.save()
            return JsonResponse("Added succesfully", safe=False)
        return JsonResponse("Failed to add.", safe=False)

    elif request.method == 'PUT':
        test_data = JSONParser().parse(request)
        test = Test.objects.get(TestId=test_data['TestId'])
        test_serializer = TestSerializer(test, data=test_data)
        if test_serializer.is_valid():
            test_serializer.save()
            return JsonResponse("Updated Succesfully!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method == 'DELETE':
        test = Test.objects.get(TestId=id)
        test.delete()
        return JsonResponse("Deleted Succesfully!", safe=False)


@csrf_exempt
def trabajadorAPI(request, id=0, ):
    if request.method == 'GET':
        if id != 0:
            if checkInt(id):
                try:
                    trabajador = Trabajador.objects.get(numero_cedula=str(id))
                    trabajador_serializer = TrabajadorSerializer(trabajador)
                    return JsonResponse(trabajador_serializer.data, safe=False)
                except ObjectDoesNotExist:
                    return JsonResponse("El trabajador con cedula " + str(id) + " no existe", safe=False)
            else:
                try:
                    trabajador = Trabajador.objects.filter(
                        Q(nombre__icontains=str(id)) | Q(apellido__icontains=str(id)))
                    trabajador_serializer = TrabajadorSerializer(trabajador, many=True)
                    return JsonResponse(trabajador_serializer.data, safe=False)
                except ObjectDoesNotExist:
                    return JsonResponse("El trabajador " + str(id) + " no existe", safe=False)

        else:
            trabajadores = Trabajador.objects.all()
            trabajador_serializer = TrabajadorSerializer(trabajadores, many=True)
            return JsonResponse(trabajador_serializer.data, safe=False)

    elif request.method == 'POST':
        trabajador_data = JSONParser().parse(request)
        print(trabajador_data)
        trabajador_serializer = TrabajadorSerializer(data=trabajador_data)
        if trabajador_serializer.is_valid():
            obj, created = Trabajador.objects.filter(
                Q(numero_cedula=trabajador_serializer.data['numero_cedula'])).get_or_create(trabajador_serializer.data)
            if created:
                return JsonResponse("Trabajador registrado satisfactoriamente", safe=False)
            else:
                return JsonResponse("Este trabajador ya existe en el sistema", safe=False)
        return JsonResponse("Failed to add.", safe=False)

    elif request.method == 'PUT':
        trabajador_data = JSONParser().parse(request)
        trabajador = Trabajador.objects.get(trabajador_id=trabajador_data['trabajador_id'])

        trabajador_serializer = TrabajadorSerializer(trabajador, data=trabajador_data)
        if trabajador_serializer.is_valid():
            trabajador_serializer.save()
            return JsonResponse("Trabajador actualizado satisfactoriamente!!", safe=False)
        return JsonResponse("Failed to Update trabajador.", safe=False)

    elif request.method == 'DELETE':
        trabajador = Trabajador.objects.get(trabajador_id=id)
        trabajador.is_active = 0
        trabajador.save()
        return JsonResponse("Deactivated Succesfully!", safe=False)


@csrf_exempt
def clienteAPI(request, id=0, ):
    if request.method == 'GET':
        all = int(request.GET.get('all') or 0)
        is_active = int(request.GET.get('is_active') or 1)
        numero_nit = str(request.GET.get('numero_nit'))
        nombre = str(request.GET.get('nombre'))
        apellido = str(request.GET.get('apellido'))

        if all == 1:
            clientes = Cliente.objects.filter(Q(is_active=is_active))
            cliente_serializer = ClienteSerializer(clientes, many=True)
            return JsonResponse(cliente_serializer.data, safe=False)

        elif numero_nit != 'None':
            try:
                cliente = Cliente.objects.filter(Q(numero_nit=numero_nit) & Q(is_active=is_active))
                cliente_serializer = ClienteSerializer(cliente, many=True)
                return JsonResponse(cliente_serializer.data, safe=False)
            except ObjectDoesNotExist:
                return JsonResponse("El cliente con NIT " + nombre + " no existe", safe=False)

        elif nombre != 'None' and apellido != 'None':
            try:
                cliente = Cliente.objects.filter((Q(apellido__icontains=apellido) & Q(nombre__icontains=nombre)), Q(is_active=is_active))
                cliente_serializer = ClienteSerializer(cliente, many=True)
                return JsonResponse(cliente_serializer.data, safe=False)
            except ObjectDoesNotExist:
                return JsonResponse("El cliente con Nombre y apellido" + nombre + " " + apellido + " no existe", safe=False)

        elif nombre != 'None':
            try:
                cliente = Cliente.objects.filter(Q(nombre__icontains=nombre) & Q(is_active=is_active))
                cliente_serializer = ClienteSerializer(cliente, many=True)
                return JsonResponse(cliente_serializer.data, safe=False)
            except ObjectDoesNotExist:
                return JsonResponse("El cliente con nombre" + str(id) + " no existe", safe=False)

        elif apellido != 'None':
            try:
                cliente = Cliente.objects.filter(Q(apellido__icontains=apellido) & Q(is_active=is_active))
                cliente_serializer = ClienteSerializer(cliente, many=True)
                return JsonResponse(cliente_serializer.data, safe=False)
            except ObjectDoesNotExist:
                return JsonResponse("El cliente con apellido" + str(id) + " no existe", safe=False)

    elif request.method == 'POST':
        cliente_data = JSONParser().parse(request)
        print(cliente_data)
        cliente_serializer = ClienteSerializer(data=cliente_data)
        if cliente_serializer.is_valid():
            cliente_serializer.save()
            return JsonResponse("Cliente registrado satisfactoriamente", safe=False)
        else:
            return JsonResponse("Failed to add.", safe=False)

    elif request.method == 'PUT':
        cliente_data = JSONParser().parse(request)
        cliente = Cliente.objects.get(cliente_id=cliente_data['cliente_id'])

        cliente_serializer = ClienteSerializer(cliente, data=cliente_data)
        if cliente_serializer.is_valid():
            cliente_serializer.save()
            return JsonResponse("Cliente actualizado satisfactoriamente!!", safe=False)
        return JsonResponse("Failed to Update.", safe=False)

    elif request.method == 'DELETE':
        cliente = Cliente.objects.get(cliente_id=id)
        cliente.is_active = 0
        cliente.save()
        return JsonResponse("Deactivated Succesfully!!", safe=False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)
    return JsonResponse(file_name, safe=False)
