# `dataOpentelekomcloudNetworkingPortV2` Submodule <a name="`dataOpentelekomcloudNetworkingPortV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNetworkingPortV2 <a name="DataOpentelekomcloudNetworkingPortV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2"></a>

Represents a {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2 opentelekomcloud_networking_port_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudnetworkingportv2"

dataopentelekomcloudnetworkingportv2.NewDataOpentelekomcloudNetworkingPortV2(scope Construct, id *string, config DataOpentelekomcloudNetworkingPortV2Config) DataOpentelekomcloudNetworkingPortV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config">DataOpentelekomcloudNetworkingPortV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config">DataOpentelekomcloudNetworkingPortV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetDeviceId">ResetDeviceId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetDeviceOwner">ResetDeviceOwner</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetFixedIp">ResetFixedIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetMacAddress">ResetMacAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetNetworkId">ResetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetPortId">ResetPortId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetAdminStateUp"></a>

```go
func ResetAdminStateUp()
```

##### `ResetDeviceId` <a name="ResetDeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetDeviceId"></a>

```go
func ResetDeviceId()
```

##### `ResetDeviceOwner` <a name="ResetDeviceOwner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetDeviceOwner"></a>

```go
func ResetDeviceOwner()
```

##### `ResetFixedIp` <a name="ResetFixedIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetFixedIp"></a>

```go
func ResetFixedIp()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetId"></a>

```go
func ResetId()
```

##### `ResetMacAddress` <a name="ResetMacAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetMacAddress"></a>

```go
func ResetMacAddress()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetName"></a>

```go
func ResetName()
```

##### `ResetNetworkId` <a name="ResetNetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetNetworkId"></a>

```go
func ResetNetworkId()
```

##### `ResetPortId` <a name="ResetPortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetPortId"></a>

```go
func ResetPortId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.resetTenantId"></a>

```go
func ResetTenantId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudnetworkingportv2"

dataopentelekomcloudnetworkingportv2.DataOpentelekomcloudNetworkingPortV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudnetworkingportv2"

dataopentelekomcloudnetworkingportv2.DataOpentelekomcloudNetworkingPortV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudnetworkingportv2"

dataopentelekomcloudnetworkingportv2.DataOpentelekomcloudNetworkingPortV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.allFixedIps">AllFixedIps</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.allSecurityGroupIds">AllSecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.deviceIdInput">DeviceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.deviceOwnerInput">DeviceOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.fixedIpInput">FixedIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.macAddressInput">MacAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.networkIdInput">NetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.portIdInput">PortIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.deviceId">DeviceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.deviceOwner">DeviceOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.fixedIp">FixedIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.macAddress">MacAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.networkId">NetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.portId">PortId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AllFixedIps`<sup>Required</sup> <a name="AllFixedIps" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.allFixedIps"></a>

```go
func AllFixedIps() *[]*string
```

- *Type:* *[]*string

---

##### `AllSecurityGroupIds`<sup>Required</sup> <a name="AllSecurityGroupIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.allSecurityGroupIds"></a>

```go
func AllSecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.adminStateUpInput"></a>

```go
func AdminStateUpInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceIdInput`<sup>Optional</sup> <a name="DeviceIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.deviceIdInput"></a>

```go
func DeviceIdInput() *string
```

- *Type:* *string

---

##### `DeviceOwnerInput`<sup>Optional</sup> <a name="DeviceOwnerInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.deviceOwnerInput"></a>

```go
func DeviceOwnerInput() *string
```

- *Type:* *string

---

##### `FixedIpInput`<sup>Optional</sup> <a name="FixedIpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.fixedIpInput"></a>

```go
func FixedIpInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MacAddressInput`<sup>Optional</sup> <a name="MacAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.macAddressInput"></a>

```go
func MacAddressInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.networkIdInput"></a>

```go
func NetworkIdInput() *string
```

- *Type:* *string

---

##### `PortIdInput`<sup>Optional</sup> <a name="PortIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.portIdInput"></a>

```go
func PortIdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.adminStateUp"></a>

```go
func AdminStateUp() interface{}
```

- *Type:* interface{}

---

##### `DeviceId`<sup>Required</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.deviceId"></a>

```go
func DeviceId() *string
```

- *Type:* *string

---

##### `DeviceOwner`<sup>Required</sup> <a name="DeviceOwner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.deviceOwner"></a>

```go
func DeviceOwner() *string
```

- *Type:* *string

---

##### `FixedIp`<sup>Required</sup> <a name="FixedIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.fixedIp"></a>

```go
func FixedIp() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MacAddress`<sup>Required</sup> <a name="MacAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.macAddress"></a>

```go
func MacAddress() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.networkId"></a>

```go
func NetworkId() *string
```

- *Type:* *string

---

##### `PortId`<sup>Required</sup> <a name="PortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.portId"></a>

```go
func PortId() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNetworkingPortV2Config <a name="DataOpentelekomcloudNetworkingPortV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/dataopentelekomcloudnetworkingportv2"

&dataopentelekomcloudnetworkingportv2.DataOpentelekomcloudNetworkingPortV2Config {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdminStateUp: interface{},
	DeviceId: *string,
	DeviceOwner: *string,
	FixedIp: *string,
	Id: *string,
	MacAddress: *string,
	Name: *string,
	NetworkId: *string,
	PortId: *string,
	ProjectId: *string,
	Region: *string,
	SecurityGroupIds: *[]*string,
	Status: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#admin_state_up DataOpentelekomcloudNetworkingPortV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.deviceId">DeviceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#device_id DataOpentelekomcloudNetworkingPortV2#device_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.deviceOwner">DeviceOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#device_owner DataOpentelekomcloudNetworkingPortV2#device_owner}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.fixedIp">FixedIp</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#fixed_ip DataOpentelekomcloudNetworkingPortV2#fixed_ip}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#id DataOpentelekomcloudNetworkingPortV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.macAddress">MacAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#mac_address DataOpentelekomcloudNetworkingPortV2#mac_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#name DataOpentelekomcloudNetworkingPortV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.networkId">NetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#network_id DataOpentelekomcloudNetworkingPortV2#network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.portId">PortId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#port_id DataOpentelekomcloudNetworkingPortV2#port_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#project_id DataOpentelekomcloudNetworkingPortV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#region DataOpentelekomcloudNetworkingPortV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#security_group_ids DataOpentelekomcloudNetworkingPortV2#security_group_ids}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#status DataOpentelekomcloudNetworkingPortV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#tenant_id DataOpentelekomcloudNetworkingPortV2#tenant_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.adminStateUp"></a>

```go
AdminStateUp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#admin_state_up DataOpentelekomcloudNetworkingPortV2#admin_state_up}.

---

##### `DeviceId`<sup>Optional</sup> <a name="DeviceId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.deviceId"></a>

```go
DeviceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#device_id DataOpentelekomcloudNetworkingPortV2#device_id}.

---

##### `DeviceOwner`<sup>Optional</sup> <a name="DeviceOwner" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.deviceOwner"></a>

```go
DeviceOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#device_owner DataOpentelekomcloudNetworkingPortV2#device_owner}.

---

##### `FixedIp`<sup>Optional</sup> <a name="FixedIp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.fixedIp"></a>

```go
FixedIp *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#fixed_ip DataOpentelekomcloudNetworkingPortV2#fixed_ip}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#id DataOpentelekomcloudNetworkingPortV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MacAddress`<sup>Optional</sup> <a name="MacAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.macAddress"></a>

```go
MacAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#mac_address DataOpentelekomcloudNetworkingPortV2#mac_address}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#name DataOpentelekomcloudNetworkingPortV2#name}.

---

##### `NetworkId`<sup>Optional</sup> <a name="NetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.networkId"></a>

```go
NetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#network_id DataOpentelekomcloudNetworkingPortV2#network_id}.

---

##### `PortId`<sup>Optional</sup> <a name="PortId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.portId"></a>

```go
PortId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#port_id DataOpentelekomcloudNetworkingPortV2#port_id}.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#project_id DataOpentelekomcloudNetworkingPortV2#project_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#region DataOpentelekomcloudNetworkingPortV2#region}.

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#security_group_ids DataOpentelekomcloudNetworkingPortV2#security_group_ids}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#status DataOpentelekomcloudNetworkingPortV2#status}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNetworkingPortV2.DataOpentelekomcloudNetworkingPortV2Config.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/opentelekomcloud/d/networking_port_v2#tenant_id DataOpentelekomcloudNetworkingPortV2#tenant_id}.

---



