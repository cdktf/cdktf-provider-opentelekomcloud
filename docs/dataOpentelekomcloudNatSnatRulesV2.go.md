# `dataOpentelekomcloudNatSnatRulesV2` Submodule <a name="`dataOpentelekomcloudNatSnatRulesV2` Submodule" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpentelekomcloudNatSnatRulesV2 <a name="DataOpentelekomcloudNatSnatRulesV2" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2"></a>

Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2 opentelekomcloud_nat_snat_rules_v2}.

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatsnatrulesv2"

dataopentelekomcloudnatsnatrulesv2.NewDataOpentelekomcloudNatSnatRulesV2(scope Construct, id *string, config DataOpentelekomcloudNatSnatRulesV2Config) DataOpentelekomcloudNatSnatRulesV2
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config">DataOpentelekomcloudNatSnatRulesV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config">DataOpentelekomcloudNatSnatRulesV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetCidr">ResetCidr</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpAddress">ResetFloatingIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpId">ResetFloatingIpId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetGatewayId">ResetGatewayId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSourceType">ResetSourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSubnetId">ResetSubnetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetCidr` <a name="ResetCidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetCidr"></a>

```go
func ResetCidr()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFloatingIpAddress` <a name="ResetFloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpAddress"></a>

```go
func ResetFloatingIpAddress()
```

##### `ResetFloatingIpId` <a name="ResetFloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetFloatingIpId"></a>

```go
func ResetFloatingIpId()
```

##### `ResetGatewayId` <a name="ResetGatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetGatewayId"></a>

```go
func ResetGatewayId()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetId"></a>

```go
func ResetId()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetRuleId"></a>

```go
func ResetRuleId()
```

##### `ResetSourceType` <a name="ResetSourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSourceType"></a>

```go
func ResetSourceType()
```

##### `ResetStatus` <a name="ResetStatus" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetSubnetId` <a name="ResetSubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.resetSubnetId"></a>

```go
func ResetSubnetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpentelekomcloudNatSnatRulesV2 resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatsnatrulesv2"

dataopentelekomcloudnatsnatrulesv2.DataOpentelekomcloudNatSnatRulesV2_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatsnatrulesv2"

dataopentelekomcloudnatsnatrulesv2.DataOpentelekomcloudNatSnatRulesV2_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatsnatrulesv2"

dataopentelekomcloudnatsnatrulesv2.DataOpentelekomcloudNatSnatRulesV2_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatsnatrulesv2"

dataopentelekomcloudnatsnatrulesv2.DataOpentelekomcloudNatSnatRulesV2_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOpentelekomcloudNatSnatRulesV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOpentelekomcloudNatSnatRulesV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOpentelekomcloudNatSnatRulesV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOpentelekomcloudNatSnatRulesV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList">DataOpentelekomcloudNatSnatRulesV2RulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddressInput">FloatingIpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpIdInput">FloatingIpIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayIdInput">GatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddress">FloatingIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpId">FloatingIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceType">SourceType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.rules"></a>

```go
func Rules() DataOpentelekomcloudNatSnatRulesV2RulesList
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList">DataOpentelekomcloudNatSnatRulesV2RulesList</a>

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FloatingIpAddressInput`<sup>Optional</sup> <a name="FloatingIpAddressInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddressInput"></a>

```go
func FloatingIpAddressInput() *string
```

- *Type:* *string

---

##### `FloatingIpIdInput`<sup>Optional</sup> <a name="FloatingIpIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpIdInput"></a>

```go
func FloatingIpIdInput() *string
```

- *Type:* *string

---

##### `GatewayIdInput`<sup>Optional</sup> <a name="GatewayIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayIdInput"></a>

```go
func GatewayIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *f64
```

- *Type:* *f64

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FloatingIpAddress`<sup>Required</sup> <a name="FloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpAddress"></a>

```go
func FloatingIpAddress() *string
```

- *Type:* *string

---

##### `FloatingIpId`<sup>Required</sup> <a name="FloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.floatingIpId"></a>

```go
func FloatingIpId() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.sourceType"></a>

```go
func SourceType() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpentelekomcloudNatSnatRulesV2Config <a name="DataOpentelekomcloudNatSnatRulesV2Config" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatsnatrulesv2"

&dataopentelekomcloudnatsnatrulesv2.DataOpentelekomcloudNatSnatRulesV2Config {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Cidr: *string,
	Description: *string,
	FloatingIpAddress: *string,
	FloatingIpId: *string,
	GatewayId: *string,
	Id: *string,
	ProjectId: *string,
	RuleId: *string,
	SourceType: *f64,
	Status: *string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.cidr">Cidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#cidr DataOpentelekomcloudNatSnatRulesV2#cidr}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#description DataOpentelekomcloudNatSnatRulesV2#description}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpAddress">FloatingIpAddress</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#floating_ip_address DataOpentelekomcloudNatSnatRulesV2#floating_ip_address}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpId">FloatingIpId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#floating_ip_id DataOpentelekomcloudNatSnatRulesV2#floating_ip_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.gatewayId">GatewayId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#gateway_id DataOpentelekomcloudNatSnatRulesV2#gateway_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#id DataOpentelekomcloudNatSnatRulesV2#id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.projectId">ProjectId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#project_id DataOpentelekomcloudNatSnatRulesV2#project_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.ruleId">RuleId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#rule_id DataOpentelekomcloudNatSnatRulesV2#rule_id}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.sourceType">SourceType</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#source_type DataOpentelekomcloudNatSnatRulesV2#source_type}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#status DataOpentelekomcloudNatSnatRulesV2#status}. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#subnet_id DataOpentelekomcloudNatSnatRulesV2#subnet_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#cidr DataOpentelekomcloudNatSnatRulesV2#cidr}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#description DataOpentelekomcloudNatSnatRulesV2#description}.

---

##### `FloatingIpAddress`<sup>Optional</sup> <a name="FloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpAddress"></a>

```go
FloatingIpAddress *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#floating_ip_address DataOpentelekomcloudNatSnatRulesV2#floating_ip_address}.

---

##### `FloatingIpId`<sup>Optional</sup> <a name="FloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.floatingIpId"></a>

```go
FloatingIpId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#floating_ip_id DataOpentelekomcloudNatSnatRulesV2#floating_ip_id}.

---

##### `GatewayId`<sup>Optional</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.gatewayId"></a>

```go
GatewayId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#gateway_id DataOpentelekomcloudNatSnatRulesV2#gateway_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#id DataOpentelekomcloudNatSnatRulesV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#project_id DataOpentelekomcloudNatSnatRulesV2#project_id}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#rule_id DataOpentelekomcloudNatSnatRulesV2#rule_id}.

---

##### `SourceType`<sup>Optional</sup> <a name="SourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.sourceType"></a>

```go
SourceType *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#source_type DataOpentelekomcloudNatSnatRulesV2#source_type}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#status DataOpentelekomcloudNatSnatRulesV2#status}.

---

##### `SubnetId`<sup>Optional</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Config.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.48/docs/data-sources/nat_snat_rules_v2#subnet_id DataOpentelekomcloudNatSnatRulesV2#subnet_id}.

---

### DataOpentelekomcloudNatSnatRulesV2Rules <a name="DataOpentelekomcloudNatSnatRulesV2Rules" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatsnatrulesv2"

&dataopentelekomcloudnatsnatrulesv2.DataOpentelekomcloudNatSnatRulesV2Rules {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpentelekomcloudNatSnatRulesV2RulesList <a name="DataOpentelekomcloudNatSnatRulesV2RulesList" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatsnatrulesv2"

dataopentelekomcloudnatsnatrulesv2.NewDataOpentelekomcloudNatSnatRulesV2RulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOpentelekomcloudNatSnatRulesV2RulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.get"></a>

```go
func Get(index *f64) DataOpentelekomcloudNatSnatRulesV2RulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOpentelekomcloudNatSnatRulesV2RulesOutputReference <a name="DataOpentelekomcloudNatSnatRulesV2RulesOutputReference" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-opentelekomcloud-go/opentelekomcloud/v12/dataopentelekomcloudnatsnatrulesv2"

dataopentelekomcloudnatsnatrulesv2.NewDataOpentelekomcloudNatSnatRulesV2RulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOpentelekomcloudNatSnatRulesV2RulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.adminStateUp">AdminStateUp</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpAddress">FloatingIpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpId">FloatingIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.sourceType">SourceType</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules">DataOpentelekomcloudNatSnatRulesV2Rules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminStateUp`<sup>Required</sup> <a name="AdminStateUp" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.adminStateUp"></a>

```go
func AdminStateUp() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `FloatingIpAddress`<sup>Required</sup> <a name="FloatingIpAddress" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpAddress"></a>

```go
func FloatingIpAddress() *string
```

- *Type:* *string

---

##### `FloatingIpId`<sup>Required</sup> <a name="FloatingIpId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.floatingIpId"></a>

```go
func FloatingIpId() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.sourceType"></a>

```go
func SourceType() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2RulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOpentelekomcloudNatSnatRulesV2Rules
```

- *Type:* <a href="#@cdktf/provider-opentelekomcloud.dataOpentelekomcloudNatSnatRulesV2.DataOpentelekomcloudNatSnatRulesV2Rules">DataOpentelekomcloudNatSnatRulesV2Rules</a>

---



