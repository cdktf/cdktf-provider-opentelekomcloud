# `dataOpentelekomcloudNatGatewayV2` Submodule <a name="`dataOpentelekomcloudNatGatewayV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNatGatewayV2 <a name="DataOpentelekomcloudNatGatewayV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2 opentelekomcloud_nat_gateway_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatgatewayv2"

dataopentelekomcloudnatgatewayv2.NewDataOpentelekomcloudNatGatewayV2(scope Construct, id *string, config DataOpentelekomcloudNatGatewayV2Config) DataOpentelekomcloudNatGatewayV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config">DataOpentelekomcloudNatGatewayV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config">DataOpentelekomcloudNatGatewayV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetAdminStateUp">ResetAdminStateUp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetInternalNetworkId">ResetInternalNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetNatId">ResetNatId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetRouterId">ResetRouterId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetSpec">ResetSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetAdminStateUp` <a name="ResetAdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetAdminStateUp"></a>

```go
func ResetAdminStateUp()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetId"></a>

```go
func ResetId()
```

##### `ResetInternalNetworkId` <a name="ResetInternalNetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetInternalNetworkId"></a>

```go
func ResetInternalNetworkId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetName"></a>

```go
func ResetName()
```

##### `ResetNatId` <a name="ResetNatId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetNatId"></a>

```go
func ResetNatId()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRouterId` <a name="ResetRouterId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetRouterId"></a>

```go
func ResetRouterId()
```

##### `ResetSpec` <a name="ResetSpec" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetSpec"></a>

```go
func ResetSpec()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.resetTenantId"></a>

```go
func ResetTenantId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudNatGatewayV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatgatewayv2"

dataopentelekomcloudnatgatewayv2.DataOpentelekomcloudNatGatewayV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatgatewayv2"

dataopentelekomcloudnatgatewayv2.DataOpentelekomcloudNatGatewayV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatgatewayv2"

dataopentelekomcloudnatgatewayv2.DataOpentelekomcloudNatGatewayV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatgatewayv2"

dataopentelekomcloudnatgatewayv2.DataOpentelekomcloudNatGatewayV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudNatGatewayV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudNatGatewayV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudNatGatewayV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudNatGatewayV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.adminStateUpInput">AdminStateUpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.internalNetworkIdInput">InternalNetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.natIdInput">NatIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.routerIdInput">RouterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.specInput">SpecInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.internalNetworkId">InternalNetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.natId">NatId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.routerId">RouterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.spec">Spec</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdminStateUpInput`<sup>Optional</sup> <a name="AdminStateUpInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.adminStateUpInput"></a>

```go
func AdminStateUpInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InternalNetworkIdInput`<sup>Optional</sup> <a name="InternalNetworkIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.internalNetworkIdInput"></a>

```go
func InternalNetworkIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NatIdInput`<sup>Optional</sup> <a name="NatIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.natIdInput"></a>

```go
func NatIdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `RouterIdInput`<sup>Optional</sup> <a name="RouterIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.routerIdInput"></a>

```go
func RouterIdInput() *string
```

- *Type:* *string

---

##### `SpecInput`<sup>Optional</sup> <a name="SpecInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.specInput"></a>

```go
func SpecInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.adminStateUp"></a>

```go
func AdminStateUp() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InternalNetworkId`<sup>Required</sup> <a name="InternalNetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.internalNetworkId"></a>

```go
func InternalNetworkId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NatId`<sup>Required</sup> <a name="NatId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.natId"></a>

```go
func NatId() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `RouterId`<sup>Required</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.routerId"></a>

```go
func RouterId() *string
```

- *Type:* *string

---

##### `Spec`<sup>Required</sup> <a name="Spec" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.spec"></a>

```go
func Spec() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNatGatewayV2Config <a name="DataOpentelekomcloudNatGatewayV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatgatewayv2"

&dataopentelekomcloudnatgatewayv2.DataOpentelekomcloudNatGatewayV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AdminStateUp: interface{},
	Description: *string,
	Id: *string,
	InternalNetworkId: *string,
	Name: *string,
	NatId: *string,
	Region: *string,
	RouterId: *string,
	Spec: *string,
	Status: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.adminStateUp">AdminStateUp</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#admin_state_up DataOpentelekomcloudNatGatewayV2#admin_state_up}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#description DataOpentelekomcloudNatGatewayV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#id DataOpentelekomcloudNatGatewayV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.internalNetworkId">InternalNetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#internal_network_id DataOpentelekomcloudNatGatewayV2#internal_network_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#name DataOpentelekomcloudNatGatewayV2#name}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.natId">NatId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#nat_id DataOpentelekomcloudNatGatewayV2#nat_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#region DataOpentelekomcloudNatGatewayV2#region}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.routerId">RouterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#router_id DataOpentelekomcloudNatGatewayV2#router_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.spec">Spec</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#spec DataOpentelekomcloudNatGatewayV2#spec}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#status DataOpentelekomcloudNatGatewayV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.tenantId">TenantId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#tenant_id DataOpentelekomcloudNatGatewayV2#tenant_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AdminStateUp`<sup>Optional</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.adminStateUp"></a>

```go
AdminStateUp interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#admin_state_up DataOpentelekomcloudNatGatewayV2#admin_state_up}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#description DataOpentelekomcloudNatGatewayV2#description}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#id DataOpentelekomcloudNatGatewayV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InternalNetworkId`<sup>Optional</sup> <a name="InternalNetworkId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.internalNetworkId"></a>

```go
InternalNetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#internal_network_id DataOpentelekomcloudNatGatewayV2#internal_network_id}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#name DataOpentelekomcloudNatGatewayV2#name}.

---

##### `NatId`<sup>Optional</sup> <a name="NatId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.natId"></a>

```go
NatId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#nat_id DataOpentelekomcloudNatGatewayV2#nat_id}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#region DataOpentelekomcloudNatGatewayV2#region}.

---

##### `RouterId`<sup>Optional</sup> <a name="RouterId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.routerId"></a>

```go
RouterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#router_id DataOpentelekomcloudNatGatewayV2#router_id}.

---

##### `Spec`<sup>Optional</sup> <a name="Spec" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.spec"></a>

```go
Spec *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#spec DataOpentelekomcloudNatGatewayV2#spec}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#status DataOpentelekomcloudNatGatewayV2#status}.

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatGatewayV2.DataOpentelekomcloudNatGatewayV2Config.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.49/docs/data-sources/nat_gateway_v2#tenant_id DataOpentelekomcloudNatGatewayV2#tenant_id}.

---



