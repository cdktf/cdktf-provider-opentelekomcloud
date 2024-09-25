# `dataOpentelekomcloudLbLoadbalancerV3` Submodule <a name="`dataOpentelekomcloudLbLoadbalancerV3` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudLbLoadbalancerV3 <a name="DataOpentelekomcloudLbLoadbalancerV3" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3 opentelekomcloud_lb_loadbalancer_v3}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_lb_loadbalancer_v3

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3(
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
  l4_flavor: str = None,
  l7_flavor: str = None,
  name: str = None,
  router_id: str = None,
  subnet_id: str = None,
  vip_address: str = None,
  vip_port_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#id DataOpentelekomcloudLbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.l4Flavor">l4_flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#l4_flavor DataOpentelekomcloudLbLoadbalancerV3#l4_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.l7Flavor">l7_flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#l7_flavor DataOpentelekomcloudLbLoadbalancerV3#l7_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#name DataOpentelekomcloudLbLoadbalancerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.routerId">router_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#router_id DataOpentelekomcloudLbLoadbalancerV3#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#subnet_id DataOpentelekomcloudLbLoadbalancerV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.vipAddress">vip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#vip_address DataOpentelekomcloudLbLoadbalancerV3#vip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.vipPortId">vip_port_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#vip_port_id DataOpentelekomcloudLbLoadbalancerV3#vip_port_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#id DataOpentelekomcloudLbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `l4_flavor`<sup>Optional</sup> <a name="l4_flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.l4Flavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#l4_flavor DataOpentelekomcloudLbLoadbalancerV3#l4_flavor}.

---

##### `l7_flavor`<sup>Optional</sup> <a name="l7_flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.l7Flavor"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#l7_flavor DataOpentelekomcloudLbLoadbalancerV3#l7_flavor}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#name DataOpentelekomcloudLbLoadbalancerV3#name}.

---

##### `router_id`<sup>Optional</sup> <a name="router_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.routerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#router_id DataOpentelekomcloudLbLoadbalancerV3#router_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.subnetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#subnet_id DataOpentelekomcloudLbLoadbalancerV3#subnet_id}.

---

##### `vip_address`<sup>Optional</sup> <a name="vip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.vipAddress"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#vip_address DataOpentelekomcloudLbLoadbalancerV3#vip_address}.

---

##### `vip_port_id`<sup>Optional</sup> <a name="vip_port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.Initializer.parameter.vipPortId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#vip_port_id DataOpentelekomcloudLbLoadbalancerV3#vip_port_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetL4Flavor">reset_l4_flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetL7Flavor">reset_l7_flavor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetRouterId">reset_router_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetSubnetId">reset_subnet_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetVipAddress">reset_vip_address</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetVipPortId">reset_vip_port_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_l4_flavor` <a name="reset_l4_flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetL4Flavor"></a>

```python
def reset_l4_flavor() -> None
```

##### `reset_l7_flavor` <a name="reset_l7_flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetL7Flavor"></a>

```python
def reset_l7_flavor() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_router_id` <a name="reset_router_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetRouterId"></a>

```python
def reset_router_id() -> None
```

##### `reset_subnet_id` <a name="reset_subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetSubnetId"></a>

```python
def reset_subnet_id() -> None
```

##### `reset_vip_address` <a name="reset_vip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetVipAddress"></a>

```python
def reset_vip_address() -> None
```

##### `reset_vip_port_id` <a name="reset_vip_port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.resetVipPortId"></a>

```python
def reset_vip_port_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudLbLoadbalancerV3 resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_lb_loadbalancer_v3

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_lb_loadbalancer_v3

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformDataSource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_lb_loadbalancer_v3

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_lb_loadbalancer_v3

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOpentelekomcloudLbLoadbalancerV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOpentelekomcloudLbLoadbalancerV3 to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOpentelekomcloudLbLoadbalancerV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudLbLoadbalancerV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.adminStateUp">admin_state_up</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.availabilityZones">availability_zones</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.deletionProtection">deletion_protection</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.ipTargetEnable">ip_target_enable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.networkIds">network_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.publicIp">public_ip</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList">DataOpentelekomcloudLbLoadbalancerV3PublicIpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.updatedAt">updated_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l4FlavorInput">l4_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l7FlavorInput">l7_flavor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.routerIdInput">router_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.subnetIdInput">subnet_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipAddressInput">vip_address_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipPortIdInput">vip_port_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l4Flavor">l4_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l7Flavor">l7_flavor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.routerId">router_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipAddress">vip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipPortId">vip_port_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `admin_state_up`<sup>Required</sup> <a name="admin_state_up" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.adminStateUp"></a>

```python
admin_state_up: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `availability_zones`<sup>Required</sup> <a name="availability_zones" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.availabilityZones"></a>

```python
availability_zones: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `deletion_protection`<sup>Required</sup> <a name="deletion_protection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.deletionProtection"></a>

```python
deletion_protection: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `ip_target_enable`<sup>Required</sup> <a name="ip_target_enable" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.ipTargetEnable"></a>

```python
ip_target_enable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `network_ids`<sup>Required</sup> <a name="network_ids" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.networkIds"></a>

```python
network_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.publicIp"></a>

```python
public_ip: DataOpentelekomcloudLbLoadbalancerV3PublicIpList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList">DataOpentelekomcloudLbLoadbalancerV3PublicIpList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.tags"></a>

```python
tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `updated_at`<sup>Required</sup> <a name="updated_at" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.updatedAt"></a>

```python
updated_at: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `l4_flavor_input`<sup>Optional</sup> <a name="l4_flavor_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l4FlavorInput"></a>

```python
l4_flavor_input: str
```

- *Type:* str

---

##### `l7_flavor_input`<sup>Optional</sup> <a name="l7_flavor_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l7FlavorInput"></a>

```python
l7_flavor_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `router_id_input`<sup>Optional</sup> <a name="router_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.routerIdInput"></a>

```python
router_id_input: str
```

- *Type:* str

---

##### `subnet_id_input`<sup>Optional</sup> <a name="subnet_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.subnetIdInput"></a>

```python
subnet_id_input: str
```

- *Type:* str

---

##### `vip_address_input`<sup>Optional</sup> <a name="vip_address_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipAddressInput"></a>

```python
vip_address_input: str
```

- *Type:* str

---

##### `vip_port_id_input`<sup>Optional</sup> <a name="vip_port_id_input" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipPortIdInput"></a>

```python
vip_port_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `l4_flavor`<sup>Required</sup> <a name="l4_flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l4Flavor"></a>

```python
l4_flavor: str
```

- *Type:* str

---

##### `l7_flavor`<sup>Required</sup> <a name="l7_flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.l7Flavor"></a>

```python
l7_flavor: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `router_id`<sup>Required</sup> <a name="router_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.routerId"></a>

```python
router_id: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vip_address`<sup>Required</sup> <a name="vip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipAddress"></a>

```python
vip_address: str
```

- *Type:* str

---

##### `vip_port_id`<sup>Required</sup> <a name="vip_port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.vipPortId"></a>

```python
vip_port_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudLbLoadbalancerV3Config <a name="DataOpentelekomcloudLbLoadbalancerV3Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_lb_loadbalancer_v3

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  id: str = None,
  l4_flavor: str = None,
  l7_flavor: str = None,
  name: str = None,
  router_id: str = None,
  subnet_id: str = None,
  vip_address: str = None,
  vip_port_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#id DataOpentelekomcloudLbLoadbalancerV3#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.l4Flavor">l4_flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#l4_flavor DataOpentelekomcloudLbLoadbalancerV3#l4_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.l7Flavor">l7_flavor</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#l7_flavor DataOpentelekomcloudLbLoadbalancerV3#l7_flavor}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#name DataOpentelekomcloudLbLoadbalancerV3#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.routerId">router_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#router_id DataOpentelekomcloudLbLoadbalancerV3#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.subnetId">subnet_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#subnet_id DataOpentelekomcloudLbLoadbalancerV3#subnet_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.vipAddress">vip_address</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#vip_address DataOpentelekomcloudLbLoadbalancerV3#vip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.vipPortId">vip_port_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#vip_port_id DataOpentelekomcloudLbLoadbalancerV3#vip_port_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#id DataOpentelekomcloudLbLoadbalancerV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `l4_flavor`<sup>Optional</sup> <a name="l4_flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.l4Flavor"></a>

```python
l4_flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#l4_flavor DataOpentelekomcloudLbLoadbalancerV3#l4_flavor}.

---

##### `l7_flavor`<sup>Optional</sup> <a name="l7_flavor" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.l7Flavor"></a>

```python
l7_flavor: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#l7_flavor DataOpentelekomcloudLbLoadbalancerV3#l7_flavor}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#name DataOpentelekomcloudLbLoadbalancerV3#name}.

---

##### `router_id`<sup>Optional</sup> <a name="router_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.routerId"></a>

```python
router_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#router_id DataOpentelekomcloudLbLoadbalancerV3#router_id}.

---

##### `subnet_id`<sup>Optional</sup> <a name="subnet_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#subnet_id DataOpentelekomcloudLbLoadbalancerV3#subnet_id}.

---

##### `vip_address`<sup>Optional</sup> <a name="vip_address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.vipAddress"></a>

```python
vip_address: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#vip_address DataOpentelekomcloudLbLoadbalancerV3#vip_address}.

---

##### `vip_port_id`<sup>Optional</sup> <a name="vip_port_id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3Config.property.vipPortId"></a>

```python
vip_port_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.20/docs/data-sources/lb_loadbalancer_v3#vip_port_id DataOpentelekomcloudLbLoadbalancerV3#vip_port_id}.

---

### DataOpentelekomcloudLbLoadbalancerV3PublicIp <a name="DataOpentelekomcloudLbLoadbalancerV3PublicIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_lb_loadbalancer_v3

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudLbLoadbalancerV3PublicIpList <a name="DataOpentelekomcloudLbLoadbalancerV3PublicIpList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_lb_loadbalancer_v3

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference <a name="DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import data_opentelekomcloud_lb_loadbalancer_v3

dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.address">address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode">bandwidth_charge_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthName">bandwidth_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType">bandwidth_share_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize">bandwidth_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.ipType">ip_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp">DataOpentelekomcloudLbLoadbalancerV3PublicIp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.address"></a>

```python
address: str
```

- *Type:* str

---

##### `bandwidth_charge_mode`<sup>Required</sup> <a name="bandwidth_charge_mode" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthChargeMode"></a>

```python
bandwidth_charge_mode: str
```

- *Type:* str

---

##### `bandwidth_name`<sup>Required</sup> <a name="bandwidth_name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthName"></a>

```python
bandwidth_name: str
```

- *Type:* str

---

##### `bandwidth_share_type`<sup>Required</sup> <a name="bandwidth_share_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthShareType"></a>

```python
bandwidth_share_type: str
```

- *Type:* str

---

##### `bandwidth_size`<sup>Required</sup> <a name="bandwidth_size" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.bandwidthSize"></a>

```python
bandwidth_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_type`<sup>Required</sup> <a name="ip_type" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.ipType"></a>

```python
ip_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIpOutputReference.property.internalValue"></a>

```python
internal_value: DataOpentelekomcloudLbLoadbalancerV3PublicIp
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudLbLoadbalancerV3.DataOpentelekomcloudLbLoadbalancerV3PublicIp">DataOpentelekomcloudLbLoadbalancerV3PublicIp</a>

---



