# `opentelekomcloud_identity_protocol_v3`

Refer to the Terraform Registory for docs: [`opentelekomcloud_identity_protocol_v3`](https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3).

# `identityProtocolV3` Submodule <a name="`identityProtocolV3` Submodule" id="@cdktf/provider-opentelekomcloud.identityProtocolV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IdentityProtocolV3 <a name="IdentityProtocolV3" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3 opentelekomcloud_identity_protocol_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protocol_v3

identityProtocolV3.IdentityProtocolV3(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mapping_id: str,
  protocol: str,
  provider_id: str,
  access_config: IdentityProtocolV3AccessConfig = None,
  id: str = None,
  metadata: IdentityProtocolV3Metadata = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.mappingId">mapping_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#mapping_id IdentityProtocolV3#mapping_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#protocol IdentityProtocolV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.providerId">provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#provider_id IdentityProtocolV3#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#id IdentityProtocolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | metadata block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mapping_id`<sup>Required</sup> <a name="mapping_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.mappingId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#mapping_id IdentityProtocolV3#mapping_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#protocol IdentityProtocolV3#protocol}.

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.providerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#provider_id IdentityProtocolV3#provider_id}.

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.accessConfig"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#access_config IdentityProtocolV3#access_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#id IdentityProtocolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.Initializer.parameter.metadata"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig">put_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetAccessConfig">reset_access_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetMetadata">reset_metadata</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_access_config` <a name="put_access_config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig"></a>

```python
def put_access_config(
  access_type: str,
  client_id: str,
  provider_url: str,
  signing_key: str,
  authorization_endpoint: str = None,
  response_mode: str = None,
  response_type: str = None,
  scopes: typing.List[str] = None
) -> None
```

###### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.accessType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#access_type IdentityProtocolV3#access_type}.

---

###### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.clientId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#client_id IdentityProtocolV3#client_id}.

---

###### `provider_url`<sup>Required</sup> <a name="provider_url" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.providerUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#provider_url IdentityProtocolV3#provider_url}.

---

###### `signing_key`<sup>Required</sup> <a name="signing_key" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.signingKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#signing_key IdentityProtocolV3#signing_key}.

---

###### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.authorizationEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#authorization_endpoint IdentityProtocolV3#authorization_endpoint}.

---

###### `response_mode`<sup>Optional</sup> <a name="response_mode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.responseMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#response_mode IdentityProtocolV3#response_mode}.

---

###### `response_type`<sup>Optional</sup> <a name="response_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.responseType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#response_type IdentityProtocolV3#response_type}.

---

###### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putAccessConfig.parameter.scopes"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#scopes IdentityProtocolV3#scopes}.

---

##### `put_metadata` <a name="put_metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata"></a>

```python
def put_metadata(
  domain_id: str,
  metadata: str,
  xaccount_type: str = None
) -> None
```

###### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata.parameter.domainId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#domain_id IdentityProtocolV3#domain_id}.

---

###### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata.parameter.metadata"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}.

---

###### `xaccount_type`<sup>Optional</sup> <a name="xaccount_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.putMetadata.parameter.xaccountType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#xaccount_type IdentityProtocolV3#xaccount_type}.

---

##### `reset_access_config` <a name="reset_access_config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetAccessConfig"></a>

```python
def reset_access_config() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.resetMetadata"></a>

```python
def reset_metadata() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protocol_v3

identityProtocolV3.IdentityProtocolV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protocol_v3

identityProtocolV3.IdentityProtocolV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protocol_v3

identityProtocolV3.IdentityProtocolV3.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference">IdentityProtocolV3AccessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.links">links</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference">IdentityProtocolV3MetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfigInput">access_config_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingIdInput">mapping_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadataInput">metadata_input</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerIdInput">provider_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingId">mapping_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerId">provider_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_config`<sup>Required</sup> <a name="access_config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfig"></a>

```python
access_config: IdentityProtocolV3AccessConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference">IdentityProtocolV3AccessConfigOutputReference</a>

---

##### `links`<sup>Required</sup> <a name="links" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.links"></a>

```python
links: StringMap
```

- *Type:* cdktf.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadata"></a>

```python
metadata: IdentityProtocolV3MetadataOutputReference
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference">IdentityProtocolV3MetadataOutputReference</a>

---

##### `access_config_input`<sup>Optional</sup> <a name="access_config_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.accessConfigInput"></a>

```python
access_config_input: IdentityProtocolV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `mapping_id_input`<sup>Optional</sup> <a name="mapping_id_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingIdInput"></a>

```python
mapping_id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.metadataInput"></a>

```python
metadata_input: IdentityProtocolV3Metadata
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `provider_id_input`<sup>Optional</sup> <a name="provider_id_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerIdInput"></a>

```python
provider_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `mapping_id`<sup>Required</sup> <a name="mapping_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.mappingId"></a>

```python
mapping_id: str
```

- *Type:* str

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### IdentityProtocolV3AccessConfig <a name="IdentityProtocolV3AccessConfig" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protocol_v3

identityProtocolV3.IdentityProtocolV3AccessConfig(
  access_type: str,
  client_id: str,
  provider_url: str,
  signing_key: str,
  authorization_endpoint: str = None,
  response_mode: str = None,
  response_type: str = None,
  scopes: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.accessType">access_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#access_type IdentityProtocolV3#access_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.clientId">client_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#client_id IdentityProtocolV3#client_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.providerUrl">provider_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#provider_url IdentityProtocolV3#provider_url}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.signingKey">signing_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#signing_key IdentityProtocolV3#signing_key}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#authorization_endpoint IdentityProtocolV3#authorization_endpoint}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseMode">response_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#response_mode IdentityProtocolV3#response_mode}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseType">response_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#response_type IdentityProtocolV3#response_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#scopes IdentityProtocolV3#scopes}. |

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#access_type IdentityProtocolV3#access_type}.

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#client_id IdentityProtocolV3#client_id}.

---

##### `provider_url`<sup>Required</sup> <a name="provider_url" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.providerUrl"></a>

```python
provider_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#provider_url IdentityProtocolV3#provider_url}.

---

##### `signing_key`<sup>Required</sup> <a name="signing_key" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.signingKey"></a>

```python
signing_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#signing_key IdentityProtocolV3#signing_key}.

---

##### `authorization_endpoint`<sup>Optional</sup> <a name="authorization_endpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#authorization_endpoint IdentityProtocolV3#authorization_endpoint}.

---

##### `response_mode`<sup>Optional</sup> <a name="response_mode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseMode"></a>

```python
response_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#response_mode IdentityProtocolV3#response_mode}.

---

##### `response_type`<sup>Optional</sup> <a name="response_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.responseType"></a>

```python
response_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#response_type IdentityProtocolV3#response_type}.

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#scopes IdentityProtocolV3#scopes}.

---

### IdentityProtocolV3Config <a name="IdentityProtocolV3Config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protocol_v3

identityProtocolV3.IdentityProtocolV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  mapping_id: str,
  protocol: str,
  provider_id: str,
  access_config: IdentityProtocolV3AccessConfig = None,
  id: str = None,
  metadata: IdentityProtocolV3Metadata = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.mappingId">mapping_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#mapping_id IdentityProtocolV3#mapping_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#protocol IdentityProtocolV3#protocol}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.providerId">provider_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#provider_id IdentityProtocolV3#provider_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.accessConfig">access_config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | access_config block. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#id IdentityProtocolV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.metadata">metadata</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | metadata block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `mapping_id`<sup>Required</sup> <a name="mapping_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.mappingId"></a>

```python
mapping_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#mapping_id IdentityProtocolV3#mapping_id}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#protocol IdentityProtocolV3#protocol}.

---

##### `provider_id`<sup>Required</sup> <a name="provider_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.providerId"></a>

```python
provider_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#provider_id IdentityProtocolV3#provider_id}.

---

##### `access_config`<sup>Optional</sup> <a name="access_config" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.accessConfig"></a>

```python
access_config: IdentityProtocolV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

access_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#access_config IdentityProtocolV3#access_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#id IdentityProtocolV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Config.property.metadata"></a>

```python
metadata: IdentityProtocolV3Metadata
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}

---

### IdentityProtocolV3Metadata <a name="IdentityProtocolV3Metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protocol_v3

identityProtocolV3.IdentityProtocolV3Metadata(
  domain_id: str,
  metadata: str,
  xaccount_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.domainId">domain_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#domain_id IdentityProtocolV3#domain_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.metadata">metadata</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.xaccountType">xaccount_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#xaccount_type IdentityProtocolV3#xaccount_type}. |

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#domain_id IdentityProtocolV3#domain_id}.

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#metadata IdentityProtocolV3#metadata}.

---

##### `xaccount_type`<sup>Optional</sup> <a name="xaccount_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata.property.xaccountType"></a>

```python
xaccount_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.35.7/docs/resources/identity_protocol_v3#xaccount_type IdentityProtocolV3#xaccount_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### IdentityProtocolV3AccessConfigOutputReference <a name="IdentityProtocolV3AccessConfigOutputReference" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protocol_v3

identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetAuthorizationEndpoint">reset_authorization_endpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseMode">reset_response_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseType">reset_response_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetScopes">reset_scopes</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization_endpoint` <a name="reset_authorization_endpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetAuthorizationEndpoint"></a>

```python
def reset_authorization_endpoint() -> None
```

##### `reset_response_mode` <a name="reset_response_mode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseMode"></a>

```python
def reset_response_mode() -> None
```

##### `reset_response_type` <a name="reset_response_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetResponseType"></a>

```python
def reset_response_type() -> None
```

##### `reset_scopes` <a name="reset_scopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.resetScopes"></a>

```python
def reset_scopes() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessTypeInput">access_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpointInput">authorization_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientIdInput">client_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrlInput">provider_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseModeInput">response_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseTypeInput">response_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopesInput">scopes_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKeyInput">signing_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessType">access_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpoint">authorization_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientId">client_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrl">provider_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseMode">response_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseType">response_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopes">scopes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKey">signing_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_type_input`<sup>Optional</sup> <a name="access_type_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessTypeInput"></a>

```python
access_type_input: str
```

- *Type:* str

---

##### `authorization_endpoint_input`<sup>Optional</sup> <a name="authorization_endpoint_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpointInput"></a>

```python
authorization_endpoint_input: str
```

- *Type:* str

---

##### `client_id_input`<sup>Optional</sup> <a name="client_id_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientIdInput"></a>

```python
client_id_input: str
```

- *Type:* str

---

##### `provider_url_input`<sup>Optional</sup> <a name="provider_url_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrlInput"></a>

```python
provider_url_input: str
```

- *Type:* str

---

##### `response_mode_input`<sup>Optional</sup> <a name="response_mode_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseModeInput"></a>

```python
response_mode_input: str
```

- *Type:* str

---

##### `response_type_input`<sup>Optional</sup> <a name="response_type_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseTypeInput"></a>

```python
response_type_input: str
```

- *Type:* str

---

##### `scopes_input`<sup>Optional</sup> <a name="scopes_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopesInput"></a>

```python
scopes_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `signing_key_input`<sup>Optional</sup> <a name="signing_key_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKeyInput"></a>

```python
signing_key_input: str
```

- *Type:* str

---

##### `access_type`<sup>Required</sup> <a name="access_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.accessType"></a>

```python
access_type: str
```

- *Type:* str

---

##### `authorization_endpoint`<sup>Required</sup> <a name="authorization_endpoint" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.authorizationEndpoint"></a>

```python
authorization_endpoint: str
```

- *Type:* str

---

##### `client_id`<sup>Required</sup> <a name="client_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.clientId"></a>

```python
client_id: str
```

- *Type:* str

---

##### `provider_url`<sup>Required</sup> <a name="provider_url" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.providerUrl"></a>

```python
provider_url: str
```

- *Type:* str

---

##### `response_mode`<sup>Required</sup> <a name="response_mode" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseMode"></a>

```python
response_mode: str
```

- *Type:* str

---

##### `response_type`<sup>Required</sup> <a name="response_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.responseType"></a>

```python
response_type: str
```

- *Type:* str

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.scopes"></a>

```python
scopes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `signing_key`<sup>Required</sup> <a name="signing_key" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.signingKey"></a>

```python
signing_key: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfigOutputReference.property.internalValue"></a>

```python
internal_value: IdentityProtocolV3AccessConfig
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3AccessConfig">IdentityProtocolV3AccessConfig</a>

---


### IdentityProtocolV3MetadataOutputReference <a name="IdentityProtocolV3MetadataOutputReference" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import identity_protocol_v3

identityProtocolV3.IdentityProtocolV3MetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resetXaccountType">reset_xaccount_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_xaccount_type` <a name="reset_xaccount_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.resetXaccountType"></a>

```python
def reset_xaccount_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainIdInput">domain_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadataInput">metadata_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountTypeInput">xaccount_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadata">metadata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountType">xaccount_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_id_input`<sup>Optional</sup> <a name="domain_id_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainIdInput"></a>

```python
domain_id_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadataInput"></a>

```python
metadata_input: str
```

- *Type:* str

---

##### `xaccount_type_input`<sup>Optional</sup> <a name="xaccount_type_input" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountTypeInput"></a>

```python
xaccount_type_input: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.metadata"></a>

```python
metadata: str
```

- *Type:* str

---

##### `xaccount_type`<sup>Required</sup> <a name="xaccount_type" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.xaccountType"></a>

```python
xaccount_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3MetadataOutputReference.property.internalValue"></a>

```python
internal_value: IdentityProtocolV3Metadata
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.identityProtocolV3.IdentityProtocolV3Metadata">IdentityProtocolV3Metadata</a>

---



