# `networkingRouterRouteV2` Submodule <a name="`networkingRouterRouteV2` Submodule" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkingRouterRouteV2 <a name="NetworkingRouterRouteV2" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2 opentelekomcloud_networking_router_route_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/networkingrouterroutev2"

networkingrouterroutev2.NewNetworkingRouterRouteV2(scope Construct, id *string, config NetworkingRouterRouteV2Config) NetworkingRouterRouteV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config">NetworkingRouterRouteV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config">NetworkingRouterRouteV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetRegion">ResetRegion</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetId"></a>

```go
func ResetId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.resetRegion"></a>

```go
func ResetRegion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/networkingrouterroutev2"

networkingrouterroutev2.NetworkingRouterRouteV2_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/networkingrouterroutev2"

networkingrouterroutev2.NetworkingRouterRouteV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/networkingrouterroutev2"

networkingrouterroutev2.NetworkingRouterRouteV2_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.destinationCidrInput">DestinationCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.nextHopInput">NextHopInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.routerIdInput">RouterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.destinationCidr">DestinationCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.nextHop">NextHop</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.routerId">RouterId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationCidrInput`<sup>Optional</sup> <a name="DestinationCidrInput" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.destinationCidrInput"></a>

```go
func DestinationCidrInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NextHopInput`<sup>Optional</sup> <a name="NextHopInput" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.nextHopInput"></a>

```go
func NextHopInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterIdInput`<sup>Optional</sup> <a name="RouterIdInput" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.routerIdInput"></a>

```go
func RouterIdInput() *string
```

- *Type:* *string

---

##### `DestinationCidr`<sup>Required</sup> <a name="DestinationCidr" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.destinationCidr"></a>

```go
func DestinationCidr() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.nextHop"></a>

```go
func NextHop() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RouterId`<sup>Required</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.routerId"></a>

```go
func RouterId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkingRouterRouteV2Config <a name="NetworkingRouterRouteV2Config" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/networkingrouterroutev2"

&networkingrouterroutev2.NetworkingRouterRouteV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DestinationCidr: *string,
	NextHop: *string,
	RouterId: *string,
	Id: *string,
	Region: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.destinationCidr">DestinationCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#destination_cidr NetworkingRouterRouteV2#destination_cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.nextHop">NextHop</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#next_hop NetworkingRouterRouteV2#next_hop}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.routerId">RouterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#router_id NetworkingRouterRouteV2#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#id NetworkingRouterRouteV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#region NetworkingRouterRouteV2#region}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DestinationCidr`<sup>Required</sup> <a name="DestinationCidr" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.destinationCidr"></a>

```go
DestinationCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#destination_cidr NetworkingRouterRouteV2#destination_cidr}.

---

##### `NextHop`<sup>Required</sup> <a name="NextHop" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.nextHop"></a>

```go
NextHop *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#next_hop NetworkingRouterRouteV2#next_hop}.

---

##### `RouterId`<sup>Required</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.routerId"></a>

```go
RouterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#router_id NetworkingRouterRouteV2#router_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#id NetworkingRouterRouteV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.networkingRouterRouteV2.NetworkingRouterRouteV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/r/networking_router_route_v2#region NetworkingRouterRouteV2#region}.

---



