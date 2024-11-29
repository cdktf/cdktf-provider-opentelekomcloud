# `enterpriseVpnCustomerGatewayV5` Submodule <a name="`enterpriseVpnCustomerGatewayV5` Submodule" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EnterpriseVpnCustomerGatewayV5 <a name="EnterpriseVpnCustomerGatewayV5" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5 opentelekomcloud_enterprise_vpn_customer_gateway_v5}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_customer_gateway_v5

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  asn: typing.Union[int, float] = None,
  id: str = None,
  id_type: str = None,
  id_value: str = None,
  tags: typing.Mapping[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.idType">id_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.idValue">id_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.asn"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `id_type`<sup>Optional</sup> <a name="id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.idType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}.

---

##### `id_value`<sup>Optional</sup> <a name="id_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.idValue"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.Initializer.parameter.tags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetAsn">reset_asn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdType">reset_id_type</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdValue">reset_id_value</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetTags">reset_tags</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `reset_asn` <a name="reset_asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetAsn"></a>

```python
def reset_asn() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_id_type` <a name="reset_id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdType"></a>

```python
def reset_id_type() -> None
```

##### `reset_id_value` <a name="reset_id_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetIdValue"></a>

```python
def reset_id_value() -> None
```

##### `reset_tags` <a name="reset_tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.resetTags"></a>

```python
def reset_tags() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a EnterpriseVpnCustomerGatewayV5 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_customer_gateway_v5

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_customer_gateway_v5

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_customer_gateway_v5

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_customer_gateway_v5

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a EnterpriseVpnCustomerGatewayV5 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the EnterpriseVpnCustomerGatewayV5 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing EnterpriseVpnCustomerGatewayV5 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EnterpriseVpnCustomerGatewayV5 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.ip">ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.routeMode">route_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asnInput">asn_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idTypeInput">id_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValueInput">id_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tagsInput">tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idType">id_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValue">id_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `ip`<sup>Required</sup> <a name="ip" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.ip"></a>

```python
ip: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `route_mode`<sup>Required</sup> <a name="route_mode" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.routeMode"></a>

```python
route_mode: str
```

- *Type:* str

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `asn_input`<sup>Optional</sup> <a name="asn_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asnInput"></a>

```python
asn_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `id_type_input`<sup>Optional</sup> <a name="id_type_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idTypeInput"></a>

```python
id_type_input: str
```

- *Type:* str

---

##### `id_value_input`<sup>Optional</sup> <a name="id_value_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValueInput"></a>

```python
id_value_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `tags_input`<sup>Optional</sup> <a name="tags_input" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tagsInput"></a>

```python
tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `asn`<sup>Required</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `id_type`<sup>Required</sup> <a name="id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idType"></a>

```python
id_type: str
```

- *Type:* str

---

##### `id_value`<sup>Required</sup> <a name="id_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.idValue"></a>

```python
id_value: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### EnterpriseVpnCustomerGatewayV5Config <a name="EnterpriseVpnCustomerGatewayV5Config" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import enterprise_vpn_customer_gateway_v5

enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  asn: typing.Union[int, float] = None,
  id: str = None,
  id_type: str = None,
  id_value: str = None,
  tags: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.asn">asn</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idType">id_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idValue">id_value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.tags">tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#name EnterpriseVpnCustomerGatewayV5#name}.

---

##### `asn`<sup>Optional</sup> <a name="asn" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.asn"></a>

```python
asn: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#asn EnterpriseVpnCustomerGatewayV5#asn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id EnterpriseVpnCustomerGatewayV5#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `id_type`<sup>Optional</sup> <a name="id_type" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idType"></a>

```python
id_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id_type EnterpriseVpnCustomerGatewayV5#id_type}.

---

##### `id_value`<sup>Optional</sup> <a name="id_value" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.idValue"></a>

```python
id_value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#id_value EnterpriseVpnCustomerGatewayV5#id_value}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.enterpriseVpnCustomerGatewayV5.EnterpriseVpnCustomerGatewayV5Config.property.tags"></a>

```python
tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.26/docs/resources/enterprise_vpn_customer_gateway_v5#tags EnterpriseVpnCustomerGatewayV5#tags}.

---



