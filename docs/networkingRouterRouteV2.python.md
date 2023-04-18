# `opentelekomcloud_networking_router_route_v2`

Refer to the Terraform Registory for docs: [`opentelekomcloud_networking_router_route_v2`](https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2).

# `networkingRouterRouteV2` Submodule <a name="`networkingRouterRouteV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingRouterRouteV2 <a name="NetworkingRouterRouteV2" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2 opentelekomcloud_networking_router_route_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_router_route_v2

networkingRouterRouteV2.NetworkingRouterRouteV2(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_cidr: str,
  next_hop: str,
  router_id: str,
  id: str = None,
  region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.destinationCidr">destination_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#destination_cidr NetworkingRouterRouteV2#destination_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.nextHop">next_hop</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#next_hop NetworkingRouterRouteV2#next_hop}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.routerId">router_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#router_id NetworkingRouterRouteV2#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#id NetworkingRouterRouteV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#region NetworkingRouterRouteV2#region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr`<sup>Required</sup> <a name="destination_cidr" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.destinationCidr"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#destination_cidr NetworkingRouterRouteV2#destination_cidr}.

---

##### `next_hop`<sup>Required</sup> <a name="next_hop" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.nextHop"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#next_hop NetworkingRouterRouteV2#next_hop}.

---

##### `router_id`<sup>Required</sup> <a name="router_id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.routerId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#router_id NetworkingRouterRouteV2#router_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#id NetworkingRouterRouteV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#region NetworkingRouterRouteV2#region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetRegion">reset_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetRegion"></a>

```python
def reset_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isConstruct"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_router_route_v2

networkingRouterRouteV2.NetworkingRouterRouteV2.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_router_route_v2

networkingRouterRouteV2.NetworkingRouterRouteV2.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_router_route_v2

networkingRouterRouteV2.NetworkingRouterRouteV2.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.destinationCidrInput">destination_cidr_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.nextHopInput">next_hop_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.routerIdInput">router_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.destinationCidr">destination_cidr</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.nextHop">next_hop</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.routerId">router_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr_input`<sup>Optional</sup> <a name="destination_cidr_input" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.destinationCidrInput"></a>

```python
destination_cidr_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `next_hop_input`<sup>Optional</sup> <a name="next_hop_input" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.nextHopInput"></a>

```python
next_hop_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `router_id_input`<sup>Optional</sup> <a name="router_id_input" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.routerIdInput"></a>

```python
router_id_input: str
```

- *Type:* str

---

##### `destination_cidr`<sup>Required</sup> <a name="destination_cidr" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.destinationCidr"></a>

```python
destination_cidr: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `next_hop`<sup>Required</sup> <a name="next_hop" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.nextHop"></a>

```python
next_hop: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `router_id`<sup>Required</sup> <a name="router_id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.routerId"></a>

```python
router_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingRouterRouteV2Config <a name="NetworkingRouterRouteV2Config" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.Initializer"></a>

```python
from cdktf_cdktf_provider_opentelekomcloud import networking_router_route_v2

networkingRouterRouteV2.NetworkingRouterRouteV2Config(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[int, float] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  destination_cidr: str,
  next_hop: str,
  router_id: str,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.count">count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.destinationCidr">destination_cidr</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#destination_cidr NetworkingRouterRouteV2#destination_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.nextHop">next_hop</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#next_hop NetworkingRouterRouteV2#next_hop}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.routerId">router_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#router_id NetworkingRouterRouteV2#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#id NetworkingRouterRouteV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#region NetworkingRouterRouteV2#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.count"></a>

```python
count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `destination_cidr`<sup>Required</sup> <a name="destination_cidr" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.destinationCidr"></a>

```python
destination_cidr: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#destination_cidr NetworkingRouterRouteV2#destination_cidr}.

---

##### `next_hop`<sup>Required</sup> <a name="next_hop" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.nextHop"></a>

```python
next_hop: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#next_hop NetworkingRouterRouteV2#next_hop}.

---

##### `router_id`<sup>Required</sup> <a name="router_id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.routerId"></a>

```python
router_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#router_id NetworkingRouterRouteV2#router_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#id NetworkingRouterRouteV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#region NetworkingRouterRouteV2#region}.

---



