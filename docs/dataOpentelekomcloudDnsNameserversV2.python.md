# `data_opentelekomcloud_dns_nameservers_v2`

Refer to the Terraform Registory for docs: [`data_opentelekomcloud_dns_nameservers_v2`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2).

# `dataOpentelekomcloudDnsNameserversV2` Submodule <a name="`dataOpentelekomcloudDnsNameserversV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudDnsNameserversV2 <a name="DataOpentelekomcloudDnsNameserversV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2 opentelekomcloud_dns_nameservers_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dns_nameservers_v2

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  nameservers: typing.Union[IResolvable, typing.List[DataOpentelekomcloudDnsNameserversV2Nameservers]] = None,
  zone_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#id DataOpentelekomcloudDnsNameserversV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.nameservers">nameservers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]]</code> | nameservers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#zone_id DataOpentelekomcloudDnsNameserversV2#zone_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#id DataOpentelekomcloudDnsNameserversV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.nameservers"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]]

nameservers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#nameservers DataOpentelekomcloudDnsNameserversV2#nameservers}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.Initializer.parameter.zoneId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#zone_id DataOpentelekomcloudDnsNameserversV2#zone_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.putNameservers">put_nameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetNameservers">reset_nameservers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetZoneId">reset_zone_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_nameservers` <a name="put_nameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.putNameservers"></a>

```python
def put_nameservers(
  value: typing.Union[IResolvable, typing.List[DataOpentelekomcloudDnsNameserversV2Nameservers]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.putNameservers.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_nameservers` <a name="reset_nameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetNameservers"></a>

```python
def reset_nameservers() -> None
```

##### `reset_zone_id` <a name="reset_zone_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.resetZoneId"></a>

```python
def reset_zone_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudDnsNameserversV2 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dns_nameservers_v2

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dns_nameservers_v2

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dns_nameservers_v2

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dns_nameservers_v2

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudDnsNameserversV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudDnsNameserversV2 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudDnsNameserversV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudDnsNameserversV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.nameservers">nameservers</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList">DataOpentelekomcloudDnsNameserversV2NameserversList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.nameserversInput">nameservers_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.zoneIdInput">zone_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `nameservers`<sup>Required</sup> <a name="nameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.nameservers"></a>

```python
nameservers: DataOpentelekomcloudDnsNameserversV2NameserversList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList">DataOpentelekomcloudDnsNameserversV2NameserversList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `nameservers_input`<sup>Optional</sup> <a name="nameservers_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.nameserversInput"></a>

```python
nameservers_input: typing.Union[IResolvable, typing.List[DataOpentelekomcloudDnsNameserversV2Nameservers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]]

---

##### `zone_id_input`<sup>Optional</sup> <a name="zone_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.zoneIdInput"></a>

```python
zone_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudDnsNameserversV2Config <a name="DataOpentelekomcloudDnsNameserversV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dns_nameservers_v2

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  nameservers: typing.Union[IResolvable, typing.List[DataOpentelekomcloudDnsNameserversV2Nameservers]] = None,
  zone_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#id DataOpentelekomcloudDnsNameserversV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.nameservers">nameservers</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]]</code> | nameservers block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.zoneId">zone_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#zone_id DataOpentelekomcloudDnsNameserversV2#zone_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#id DataOpentelekomcloudDnsNameserversV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameservers`<sup>Optional</sup> <a name="nameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.nameservers"></a>

```python
nameservers: typing.Union[IResolvable, typing.List[DataOpentelekomcloudDnsNameserversV2Nameservers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]]

nameservers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#nameservers DataOpentelekomcloudDnsNameserversV2#nameservers}

---

##### `zone_id`<sup>Optional</sup> <a name="zone_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Config.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#zone_id DataOpentelekomcloudDnsNameserversV2#zone_id}.

---

### DataOpentelekomcloudDnsNameserversV2Nameservers <a name="DataOpentelekomcloudDnsNameserversV2Nameservers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dns_nameservers_v2

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers(
  hostname: str = None,
  priority: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.property.hostname">hostname</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#hostname DataOpentelekomcloudDnsNameserversV2#hostname}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#priority DataOpentelekomcloudDnsNameserversV2#priority}. |

---

##### `hostname`<sup>Optional</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#hostname DataOpentelekomcloudDnsNameserversV2#hostname}.

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.12/docs/data-sources/dns_nameservers_v2#priority DataOpentelekomcloudDnsNameserversV2#priority}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudDnsNameserversV2NameserversList <a name="DataOpentelekomcloudDnsNameserversV2NameserversList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dns_nameservers_v2

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudDnsNameserversV2NameserversOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOpentelekomcloudDnsNameserversV2Nameservers]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]]

---


### DataOpentelekomcloudDnsNameserversV2NameserversOutputReference <a name="DataOpentelekomcloudDnsNameserversV2NameserversOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_dns_nameservers_v2

dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resetHostname">reset_hostname</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resetPriority">reset_priority</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_hostname` <a name="reset_hostname" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resetHostname"></a>

```python
def reset_hostname() -> None
```

##### `reset_priority` <a name="reset_priority" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.resetPriority"></a>

```python
def reset_priority() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.hostnameInput">hostname_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.priorityInput">priority_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.priority">priority</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname_input`<sup>Optional</sup> <a name="hostname_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.hostnameInput"></a>

```python
hostname_input: str
```

- *Type:* str

---

##### `priority_input`<sup>Optional</sup> <a name="priority_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.priorityInput"></a>

```python
priority_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.priority"></a>

```python
priority: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2NameserversOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOpentelekomcloudDnsNameserversV2Nameservers]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudDnsNameserversV2.DataOpentelekomcloudDnsNameserversV2Nameservers">DataOpentelekomcloudDnsNameserversV2Nameservers</a>]

---



